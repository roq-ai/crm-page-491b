import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { crmProcessValidationSchema } from 'validationSchema/crm-processes';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.crm_process
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCrmProcessById();
    case 'PUT':
      return updateCrmProcessById();
    case 'DELETE':
      return deleteCrmProcessById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCrmProcessById() {
    const data = await prisma.crm_process.findFirst(convertQueryToPrismaUtil(req.query, 'crm_process'));
    return res.status(200).json(data);
  }

  async function updateCrmProcessById() {
    await crmProcessValidationSchema.validate(req.body);
    const data = await prisma.crm_process.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCrmProcessById() {
    const data = await prisma.crm_process.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
