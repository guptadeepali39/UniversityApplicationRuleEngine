import {
  Container,
  Form,
  FormContent,
  FormWrap,
  Icon,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  SignUpButton,
  FormH6,
} from "./SignUpElements";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  var [emailId, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("user")) {
      toast.success("User already logged in!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    }
  }, []);

  async function createAccount(e) {
    let item = { emailId, password };
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    result.status = "Success";
    if (result.status == "success") {
      // localStorage.setItem("user", JSON.stringify(result.userDetails));
      toast.success("User successfully created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/signin");
      }, 5000);
    } else {
      toast.error("User already exists!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <>
      <Container id="signup">
        <FormWrap>
          <Icon to="/">Rule Engine</Icon>
          <ToastContainer />
          <FormContent>
            <Form action="#">
              <FormH1>Create an account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Confirm password</FormLabel>
              <FormInput
                type="password"
                placeholder="Re-type your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {password && password !== confirmPassword ? (
                <FormH6>Passwords do not match!</FormH6>
              ) : (
                <FormButton type="submit" onClick={createAccount}>
                  Sign up
                </FormButton>
              )}
              <Text>
                Already have an account?{" "}
                <SignUpButton to="/signin">Sign in</SignUpButton>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
