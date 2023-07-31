import * as yup from 'yup';

export const salesPipelineValidationSchema = yup.object().shape({
  details: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
