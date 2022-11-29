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
  FormSelect,
  LogoutBtn,
} from "./createApplicationElements";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateApplication = () => {
  var [user, setUser] = useState();
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [gender, setGender] = useState("");
  var [address1, setAddress1] = useState("");
  var [address2, setAddress2] = useState("");
  var [pincode, setPincode] = useState("");
  var [country, setCountry] = useState("");
  var [studentType, setStudentType] = useState("");
  var [isLanguageTest, setisLanguageTest] = useState("");
  var [languageTestType, setlanguageTestType] = useState("");
  var [languageTestScore, setlanguageTestScore] = useState("");
  var [levelOfEducation, setlevelOfEducation] = useState("");
  var [gpa, setGPA] = useState("");
  var [relevantExperince, setrelevantExperince] = useState("");
  var [totalEducation, setTotalEducation] = useState("");
  var [familyIncome, setFamilyIncome] = useState("");
  var [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  var user
  var navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("User not logged in!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } else {
      user = JSON.parse(localStorage.getItem("user"));
      getUserDetails();
    }
  },[]);

  // const logoutCall = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };

  const getUserDetails = async () => {
    // e.preventDefault();
    try {
      fetch(`http://localhost:8000/api/getUserDetails/${user.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.statusCode == "S101" && result.status == "Success") {
            setFirstName(result.studentDetails.firstName);
            setLastName(result.studentDetails.lastName);
            setGender(result.studentDetails.gender);
            setAddress1(result.studentDetails.address1);
            setAddress2(result.studentDetails.address2);
            setPincode(result.studentDetails.pincode);
            setCountry(result.studentDetails.country);
            setStudentType(result.studentDetails.studentType);
            setisLanguageTest(result.studentDetails.isLanguageTest);
            setlanguageTestType(result.studentDetails.languageTestType);
            setlanguageTestScore(result.studentDetails.languageTestScore);
            setlevelOfEducation(result.studentDetails.levelOfEducation);
            setGPA(result.studentDetails.gpa);
            setrelevantExperince(result.studentDetails.relevantExperince);
            // setTotalEducation(result.studentDetails.totalEducation);
            // setFamilyIncome(result.studentDetails.familyIncome);
          }
        })
        .catch((error) => {
          toast.error("Internal Server Error");
        });
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  async function getUserDetails2() {
    return fetch(`http://localhost:8000/api/getUserDetails/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((result) => {
      result = result.json();
      if (result.statusCode == "S101") {
        setFirstName(result.studentDetails.firstName);
        setLastName(result.studentDetails.lastName);
        setGender(result.studentDetails.gender);
        setAddress1(result.studentDetails.address1);
        setAddress2(result.studentDetails.address2);
        setPincode(result.studentDetails.pincode);
        setCountry(result.studentDetails.country);
        setStudentType(result.studentDetails.studentType);
        setisLanguageTest(result.studentDetails.isLanguageTest);
        setlanguageTestType(result.studentDetails.languageTestType);
        setlanguageTestScore(result.studentDetails.languageTestScore);
        setlevelOfEducation(result.studentDetails.levelOfEducation);
        setGPA(result.studentDetails.gpa);
        setrelevantExperince(result.studentDetails.relevantExperince);
        // setTotalEducation(result.studentDetails.totalEducation);
        // setFamilyIncome(result.studentDetails.familyIncome);
        toast.error("Restored existing application.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      // else {
      //   toast.error(result.message, {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      // }
    });

    // var result = {
    //   status: "success",
    //   statusCode: "S101",
    //   message: "Success",
    //   studentDetails: {
    //     id: 7,
    //     userId: 3,
    //     firstName: "deepali",
    //     lastName: "gupta",
    //     address1: "5 lisburn",
    //     address2: "North york",
    //     pincode: "M2J 2Z4",
    //     country: "Canada",
    //     studentType: "international",
    //     gender: "F",
    //     isLanguageTest: null,
    //     languageTestType: "IELTS",
    //     languageTestScore: 9,
    //     levelOfEducation: "Bachelors",
    //     previousFieldOfStudy: "Computer Science",
    //     course: "PG Diploma",
    //     fieldOfStudy: "CSE",
    //     relevantExperince: 5.5,
    //     gpa: 3,
    //   },
    // };
  }

  function saveUserDetails() {}

  return (
    <>
      <Container id="signin">
        <FormWrap>
          <Icon to="/">Rule Engine</Icon>
          <ToastContainer />
          <FormContent>
            <Form action="#" className="col-md-12">
              <FormH1>Add/update your details to apply</FormH1>
              <FormLabel htmlFor="for">First name</FormLabel>
              <FormInput
                type="text"
                value={firstName}
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Last name</FormLabel>
              <FormInput
                type="text"
                value={lastName}
                placeholder="Enter your last name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Gender</FormLabel>
              <FormSelect
                onChange={(e) => setGender(e.target.value)}
                required
                value={gender}>
                <option value="" disabled defaultValue>
                  Select your gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </FormSelect>
              <FormLabel htmlFor="for">Address line 1</FormLabel>
              <FormInput
                type="text"
                value={address1}
                placeholder="Enter address line 1"
                maxLength={200}
                onChange={(e) => setAddress1(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Address line 2</FormLabel>
              <FormInput
                type="text"
                value={address2}
                placeholder="Enter address line 2"
                maxLength={200}
                onChange={(e) => setAddress2(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Pincode</FormLabel>
              <FormInput
                type="text"
                value={pincode}
                placeholder="Enter pincode"
                maxLength={10}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Country</FormLabel>
              <FormInput
                type="text"
                value={country}
                placeholder="Enter country"
                maxLength={30}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Student type</FormLabel>
              <FormSelect
                onChange={(e) => setStudentType(e.target.value)}
                required
                value={studentType}>
                <option value="" disabled>
                  Select student type
                </option>
                <option value="international">International</option>
                <option value="canadian">Canadian</option>
              </FormSelect>
              <FormLabel htmlFor="for">
                Did you take a language eligibility test?
              </FormLabel>
              <FormSelect
                value={isLanguageTest}
                onChange={(e) => setisLanguageTest(e.target.value)}
                required>
                <option value="yes">Yes</option>
                <option value="no" defaultValue>
                  No
                </option>
              </FormSelect>
              {isLanguageTest == "yes" ? (
                <>
                  <FormLabel htmlFor="for">
                    Which language eligibility test did you take?
                  </FormLabel>
                  <FormSelect
                    value={languageTestType}
                    onChange={(e) => setlanguageTestType(e.target.value)}
                    required>
                    <option value="IELTS" defaultValue>
                      IELTS
                    </option>
                    <option value="TOEFL">TOEFL</option>
                  </FormSelect>
                  <FormLabel htmlFor="for">
                    Overall language eligibility test score
                  </FormLabel>
                  <FormInput
                    value={languageTestScore}
                    type="number"
                    placeholder="Overall language eligibility test score"
                    maxLength={3}
                    max={9}
                    onChange={(e) => setlanguageTestScore(e.target.value)}
                    required
                  />{" "}
                </>
              ) : (
                ""
              )}
              {/* <FormLabel htmlFor="for">Total years of education</FormLabel>
              <FormInput
                type="number"
                placeholder="Total years of education"
                maxLength={2}
                onChange={(e) => setTotalEducation(e.target.value)}
                required
              /> */}
              <FormLabel htmlFor="for">
                Education level (highest level of education completed)
              </FormLabel>
              <FormSelect
                value={levelOfEducation}
                onChange={(e) => setlevelOfEducation(e.target.value)}
                required>
                <option value="High School" defaultValue>
                  High school
                </option>
                <option value="Bachelors">Bachelor's degree</option>
                <option value="Masters">Master's degree</option>
              </FormSelect>
              <FormLabel htmlFor="for">
                GPA in highest education level
              </FormLabel>
              <FormInput
                type="number"
                value={gpa}
                placeholder="GPA in highest education level"
                maxLength={5}
                onChange={(e) => setGPA(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">
                Relevant work experience (in years)
              </FormLabel>
              <FormInput
                type="number"
                placeholder="Relevant work experience (in years)"
                maxLength={2}
                value={relevantExperince}
                onChange={(e) => relevantExperince(e.target.value)}
                required
              />
              {/* <FormLabel htmlFor="for">
                Family income (in CAD, per year)
              </FormLabel>
              <FormInput
                type="number"
                placeholder="Family income (in CAD, per year)"
                maxLength={7}
                onChange={(e) => setFamilyIncome(e.target.value)}
                required
              /> */}
              <FormButton type="submit" onClick={saveUserDetails}>
                Save user details
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </>
  );
};

export default CreateApplication;
