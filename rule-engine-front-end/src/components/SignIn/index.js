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

const SignIn = () => {
  var [emailId, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [user, setUser] = useState("");
  var [isLoggedIn,setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("user")));
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

  async function login(e) {
    localStorage.removeItem("user");
    setIsLoggedIn(false)
    let item = { emailId, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if (result.statusCode == "S101") {
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     status: "Success",
      //     statusCode: "S101",
      //     message: "Log in successful",
      //     userDetails: {
      //       id: 1,
      //       emailId: "deepali.gupta@gmail.com",
      //       password: "dGVzdA==",
      //     },
      //   })
      // );
      localStorage.setItem("user", JSON.stringify(result.userDetails));
      setIsLoggedIn(true)
      toast.success("User successfully logged in!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setIsLoggedIn(false)
      toast.error(result.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  // }
  return (
    <>
      <Container id="signin">
        <FormWrap>
          <Icon to="/">Rule Engine</Icon>
          <ToastContainer />
          <FormContent>
            <Form action="#">
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
              {/* {emailId.valid ? ( */}
              <FormButton type="submit" onClick={login}>
                Sign in
              </FormButton>
              {/* ) : (
                ""
              )} */}
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
