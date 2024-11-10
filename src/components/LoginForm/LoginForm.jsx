import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label className="labelLogin" htmlFor="email">
          Email
        </label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label className="labelLogin" htmlFor="password">
          Password
        </label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;