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
} from "./SignInElements";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppConstant from "../../services/apiConstant";

const SignIn = () => {
  var [emailId, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [user, setUser] = useState("");
  var [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  var navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoggedIn) {
      toast.success("User already logged in!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    }
  }, []);

  const login = async (e) => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    e.preventDefault();
    try {
      fetch(`${AppConstant.BASE_API_URL}login`, {
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
            localStorage.setItem("user", JSON.stringify(result.user));
            setIsLoggedIn(true);
            setUser(result.userDetails);
            toast.success(result.message);
            navigate("/");
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
      <Container id="signin">
        <FormWrap>
          <Icon to="/">Rule Engine</Icon>
          <ToastContainer />
          <FormContent>
            <Form action="#" onSubmit={login}>
              <FormH1>Sign in to your account</FormH1>
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
              <FormButton type="submit">Sign in</FormButton>
              <Text>
                Don't have an account?{" "}
                <SignUpButton to="/signup">Sign up</SignUpButton>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default SignIn;
