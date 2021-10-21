import React from "react";
import {
  Container,
  InputContainer,
  InputSection,
  Input,
  Text,
  SubmitButton,
} from "../css/home";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";

function Login(props) {
  const history = useHistory();
  const AlreadyHaveAccount = () => {
    props.history.push("/signup");
  };

  const validationSchema = yup.object({
    EmailId: yup.string().required("Email Id is required *"),
    Password: yup.string().required("Password is required *"),
  });

  const onSubmit = (values) => {
    alert("submit button clicked");
  };
  const formik = useFormik({
    initialValues: { EmailId: "", Password: "" },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit,
  });
  return (
    <>
      <Container
        bgcolor={"#EAE7DC"}
        position={"fixed"}
        padding={23}
        top={10}
        left={40}
      >
        Quiz Login
      </Container>
      <Container
        left={40}
        top={30}
        bgcolor={"#EAE7DC"}
        position={"fixed"}
        padding={20}
        onSubmit={formik.handleSubmit}
      >
        <InputContainer>
          <InputSection txtalign={"center"}>
            {formik.errors.EmailId && formik.touched.EmailId ? (
              <Text jtcontent={"start"} ftsize={1.2} color={"red"}>
                Email Id is required *
              </Text>
            ) : (
              <Text jtcontent={"start"} ftsize={1.2} color={"#8E8D8A"}>
                Email Id
              </Text>
            )}
            <Input
              type="text"
              name="EmailId"
              value={formik.values.EmailId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </InputSection>
        </InputContainer>
        <InputContainer>
          <InputSection txtalign={"center"}>
            {formik.errors.Password && formik.touched.Password ? (
              <Text jtcontent={"start"} ftsize={1.2} color={"red"}>
                Password is required *
              </Text>
            ) : (
              <Text jtcontent={"start"} ftsize={1.2} color={"#8E8D8A"}>
                Password
              </Text>
            )}
            <Input
              type="password"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </InputSection>
        </InputContainer>
        <SubmitButton>Signin</SubmitButton>
        <SubmitButton top={0.4} onClick={AlreadyHaveAccount}>
          Don't Have an Account?
        </SubmitButton>
      </Container>
    </>
  );
}

export default Login;
