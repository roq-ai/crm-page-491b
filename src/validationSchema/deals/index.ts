import * as yup from 'yup';

export const dealValidationSchema = yup.object().shape({
  details: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
