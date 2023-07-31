import * as yup from 'yup';

export const supportSystemValidationSchema = yup.object().shape({
  details: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
