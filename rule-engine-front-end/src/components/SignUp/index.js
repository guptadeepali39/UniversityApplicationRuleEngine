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
} from "./SignupElements";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppConstant from "../../services/apiConstant";
const SignUp = () => {
  var [emailId, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [confirmPassword, setConfirmPassword] = useState("");
  var [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoggedIn) {
      toast.success("User already logged in!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    }
  }, []);

  const createAccount = async (e) => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    e.preventDefault();
    try {
      fetch(`${AppConstant.BASE_API_URL}register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId, password }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.statusCode == "S101" && result.status == "Success") {
            toast.success(result.message);
            navigate("/signin");
          } else {
            toast.error(result.message);
          }
        })
        .catch((error) => {
          toast.error("Internal Server Error");
        });
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <>
      <Container id="signup">
        <FormWrap>
          <Icon to="/">Lambton Admissions</Icon>
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
