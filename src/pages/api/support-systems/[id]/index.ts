import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { supportSystemValidationSchema } from 'validationSchema/support-systems';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.support_system
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSupportSystemById();
    case 'PUT':
      return updateSupportSystemById();
    case 'DELETE':
      return deleteSupportSystemById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSupportSystemById() {
    const data = await prisma.support_system.findFirst(convertQueryToPrismaUtil(req.query, 'support_system'));
    return res.status(200).json(data);
  }

  async function updateSupportSystemById() {
    await supportSystemValidationSchema.validate(req.body);
    const data = await prisma.support_system.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteSupportSystemById() {
    const data = await prisma.support_system.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
