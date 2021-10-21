import React from "react";
import {
  Container,
  InputContainer,
  InputSection,
  Input,
  Text,
  SubmitButton,
  TextBox,
} from "../css/home";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router";

function Signup(props) {
  const history = useHistory();

  const GotoLogin = () => {
    props.history.push("/");
  };
  const validationSchema = yup.object({
    FirstName: yup.string().required("First Name is Required *"),
    LastName: yup.string().required("Last Name is Required *"),
    Office: yup.string().required("Office Name is Required*"),
    Email_Address: yup
      .string()
      .email()
      .required("Email Address is Required * "),
    Password: yup
      .string()
      .required("Password is Required *")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters 1 Uppercase\n1 Lowercase,\n1 Number and 1 special case Character"
      ),
    ConfirmPassword: yup
      .string()
      .required("Confirm Password is Required *")
      .oneOf([yup.ref("Password"), null], "Passwords must match"),
  });

  const onSubmit = (values) => {
    alert("submit clicked");
  };

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Office: "",
      Email_Address: "",
      Password: "",
      ConfirmPassword: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <>
      <div>
        <Container
          position={"fixed"}
          bgcolor={"whitesmoke"}
          left={35}
          top={10}
          padding={20}
        >
          Money Manager Sign Up
        </Container>
        <Container
          onSubmit={formik.handleSubmit}
          position={"fixed"}
          left={25}
          top={30}
          padding={20}
          bgcolor={"whitesmoke"}
        >
          <InputContainer top={20} minwidth={2} minheight={2}>
            <InputSection txtalign={"center"}>
              {formik.errors.FirstName && formik.touched.FirstName ? null : (
                <Text color={"grey-500"} ftsize={1.5} jtcontent={"center"}>
                  First Name{" "}
                </Text>
              )}
              {/* <Text color={"grey-500"} ftsize = {1.5}>First Name</Text> */}
              <Input
                type="text"
                name="FirstName"
                placeholder="Enter Your First Name"
                value={formik.values.FirstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.FirstName && formik.touched.FirstName ? (
                <TextBox>
                  <Text color={"red"} ftsize={0.8}>
                    {formik.errors.FirstName}
                  </Text>
                </TextBox>
              ) : null}
            </InputSection>
            <InputSection txtalign={"center"}>
              {formik.errors.LastName && formik.touched.LastName ? null : (
                <Text color={"grey-500"} ftsize={1.5} jtcontent={"center"}>
                  Last Name{" "}
                </Text>
              )}
              {/* <Text color={"grey-500"} ftsize = {1.5}> Last Name </Text> */}
              <Input
                type="text"
                name="LastName"
                placeholder="Enter Your Last Name"
                value={formik.values.LastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.LastName && formik.touched.LastName ? (
                <TextBox>
                  <Text color={"red"} ftsize={0.8}>
                    {formik.errors.LastName}
                  </Text>
                </TextBox>
              ) : null}
            </InputSection>
          </InputContainer>
          <InputContainer>
            <InputSection txtalign={"center"}>
              {formik.errors.Office && formik.touched.Office ? null : (
                <Text color={"grey-500"} ftsize={1.5} jtcontent={"center"}>
                  Office{" "}
                </Text>
              )}
              {/* <Text color={"grey-500"} ftsize = {1.5}> Office</Text> */}
              <Input
                type="text"
                name="Office"
                placeholder="Enter Your Organization Name"
                value={formik.values.Office}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Office && formik.touched.Office ? (
                <TextBox>
                  <Text color={"red"} ftsize={0.8}>
                    {formik.errors.Office}
                  </Text>
                </TextBox>
              ) : null}
            </InputSection>
            <InputSection txtalign={"center"}>
              {formik.errors.Email_Address &&
              formik.touched.Email_Address ? null : (
                <Text color={"grey-500"} ftsize={1.5} jtcontent={"center"}>
                  Email Address{" "}
                </Text>
              )}
              {/* <Text color={"grey-500"} ftsize = {1.5}>Email Address</Text> */}
              <Input
                type="text"
                name="Email_Address"
                placeholder="Enter Your Email Address"
                value={formik.values.Email_Address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Email_Address && formik.touched.Email_Address ? (
                <TextBox>
                  <Text color={"red"} ftsize={0.8}>
                    {formik.errors.Email_Address}
                  </Text>
                </TextBox>
              ) : null}
            </InputSection>
          </InputContainer>
          <InputContainer>
            <InputSection txtalign={"center"}>
              {formik.errors.Password && formik.touched.Password ? null : (
                <Text color={"grey-500"} ftsize={1.5} jtcontent={"center"}>
                  Password{" "}
                </Text>
              )}

              <Input
                type="password"
                name="Password"
                placeholder="Please Enter your Password"
                value={formik.values.Password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Password && formik.touched.Password ? (
                <TextBox width={22} height={10}>
                  <Text color={"red"} ftsize={0.8}>
                    {formik.errors.Password}
                  </Text>
                </TextBox>
              ) : null}
            </InputSection>

            <InputSection txtalign={"center"}>
              {formik.errors.ConfirmPassword &&
              formik.touched.ConfirmPassword ? null : (
                <Text color={"grey-500"} ftsize={1.5} jtcontent={"center"}>
                  Confirm Password{" "}
                </Text>
              )}
              {/* <Text color={"grey-500"} ftsize = {1.5}>Confirm Password </Text> */}
              <Input
                type="password"
                name="ConfirmPassword"
                placeholder="Confirm Your Password"
                value={formik.values.ConfirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.ConfirmPassword &&
              formik.touched.ConfirmPassword ? (
                <TextBox width={22} height={10}>
                  <Text color={"red"} ftsize={0.8}>
                    {formik.errors.ConfirmPassword}
                  </Text>
                </TextBox>
              ) : null}
            </InputSection>
          </InputContainer>
          <div
            className="button-section"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <SubmitButton top={0.3} left={1} width={7} onClick={GotoLogin}>
              back
            </SubmitButton>
            <SubmitButton type="submit" top={0.3} left={30} width={7}>
              Signup
            </SubmitButton>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Signup;
