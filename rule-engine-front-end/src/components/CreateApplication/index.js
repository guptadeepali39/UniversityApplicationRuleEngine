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
import { json, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppConstant from "../../services/apiConstant";
import Confetti from "react-confetti";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CreateApplication = () => {
  const { height, width } = useWindowDimensions();
  var [user, setUser] = useState({});
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [gender, setGender] = useState("M");
  var [address1, setAddress1] = useState("");
  var [address2, setAddress2] = useState("");
  var [pincode, setPincode] = useState("");
  var [country, setCountry] = useState("");
  var [studentType, setStudentType] = useState("international");
  var [isLanguageTest, setisLanguageTest] = useState("Y");
  var [languageTestType, setlanguageTestType] = useState("IELTS");
  var [languageTestScore, setlanguageTestScore] = useState(0);
  var [levelOfEducation, setlevelOfEducation] = useState("Bachelors");
  var [gpa, setGPA] = useState(0);
  var [relevantExperince, setrelevantExperience] = useState(0);
  var [fieldOfStudy, setfieldOfStudy] = useState("Information Technology");
  var [previousFieldOfStudy, setpreviousFieldOfStudy] = useState(
    "Information Technology"
  );
  var [familyIncome, setFamilyIncome] = useState(0);
  var [totalEducation, setTotalEducation] = useState(0);
  var [course, setCourse] = useState("Postgraduate Diploma");
  var [id, setId] = useState();
  var [userId, setuserId] = useState();
  var [confetti, setConfetti] = useState(false);
  var [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  var user;
  var navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isLoggedIn) {
      toast.error("User not logged in!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } else {
      user = JSON.parse(localStorage.getItem("user"));
      setuserId(user.id);
      try {
        fetch(`${AppConstant.BASE_API_URL}getUserDetails/${user.id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.statusCode == "S101" && result.status == "Success") {
              if (result.studentDetails) {
                toast.success(result.message);
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
                setrelevantExperience(result.studentDetails.relevantExperince);
                setfieldOfStudy(result.studentDetails.fieldOfStudy);
                setTotalEducation(result.studentDetails.totalEducation);
                setFamilyIncome(result.studentDetails.familyIncome);
                setpreviousFieldOfStudy(
                  result.studentDetails.previousFieldOfStudy
                );
                setId(result.studentDetails.id);
              }
            }
          })
          .catch((error) => {
            toast.error("Internal Server Error");
          });
      } catch (error) {
        toast.error("Internal Server Error");
      }
    }
  }, []);

  const saveUserDetails = async (e) => {
    e.preventDefault();
    let reqBody = {
      id: id,
      userId: userId,
      familyIncome: parseInt(familyIncome),
      totalEducation: parseInt(totalEducation),
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      pincode: pincode,
      country: country,
      studentType: studentType,
      isLanguageTest: isLanguageTest,
      languageTestType: languageTestType,
      languageTestScore: parseFloat(languageTestScore),
      levelOfEducation: levelOfEducation,
      gpa: parseFloat(gpa),
      relevantExperince: parseFloat(relevantExperince),
      fieldOfStudy: fieldOfStudy,
      previousFieldOfStudy: previousFieldOfStudy,
      course: course,
    };
    try {
      fetch(`${AppConstant.BASE_API_URL}addUpdateDetails`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.statusCode == "S101" && result.status == "Success") {
            if (result.studentDetails) {
              if (result.studentDetails.id) {
                setId(response.studentDetails.id);
              }
            }
            toast.success("User details saved successfully");
            try {
              fetch(`${AppConstant.ELIGIBILITY_API_URL}eligibility`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(reqBody),
              })
                .then((resp) => resp.json())
                .then((response) => {
                  if (response.result == "Eligible") {
                    window.scrollTo(0, 0);
                    toast.success(response.message);
                    showConfetti();
                  } else {
                    toast.error(response.message);
                  }
                })
                .catch((error) => {
                  toast.error("Internal Server Error");
                });
            } catch (error) {
              toast.error("Internal Server Error");
            }
          }
        })
        .catch((error) => {
          toast.error("Internal Server Error");
        });
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  function showConfetti() {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 5000);
  }

  return (
    <>
      <Container id="application">
        <FormWrap>
          {confetti ? (
            <Confetti
              run={true}
              numberOfPieces={1000}
              opacity={0.7}
              recycle={false}
              width={window.innerWidth}
              height={window.innerHeight}
            />
          ) : (
            ""
          )}
          <Icon to="/">Lambton Admissions</Icon>
          <ToastContainer />
          <FormContent>
            <Form action="#" className="col-md-12">
              <FormH1>Add/update your details to apply</FormH1>
              <FormLabel htmlFor="for">First name</FormLabel>
              <FormInput
                type="text"
                value={firstName}
                maxLength="50"
                placeholder="Enter your first name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Last name</FormLabel>
              <FormInput
                type="text"
                value={lastName}
                maxLength="50"
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
                maxLength="200"
                onChange={(e) => setAddress1(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Address line 2</FormLabel>
              <FormInput
                type="text"
                value={address2}
                placeholder="Enter address line 2"
                maxLength="200"
                onChange={(e) => setAddress2(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Pincode</FormLabel>
              <FormInput
                type="text"
                value={pincode}
                placeholder="Enter pincode"
                maxLength="10"
                onChange={(e) => setPincode(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">Country</FormLabel>
              <FormInput
                type="text"
                value={country}
                placeholder="Enter country"
                maxLength="30"
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
                <option value="Y" defaultValue>
                  Yes
                </option>
                <option value="N" defaultValue>
                  No
                </option>
              </FormSelect>
              <FormLabel htmlFor="for">
                Which language eligibility test did you take?
              </FormLabel>
              <FormSelect
                value={languageTestType}
                onChange={(e) => setlanguageTestType(e.target.value)}>
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
                onChange={(e) => setlanguageTestScore(e.target.value)}
              />
              <FormLabel htmlFor="for">Total years of education</FormLabel>
              <FormInput
                type="number"
                placeholder="Total years of education"
                max="50"
                value={totalEducation}
                onChange={(e) => setTotalEducation(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">
                Education level (Highest level of education completed)
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
                max="4"
                onChange={(e) => setGPA(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">
                Field of study of highest education completed
              </FormLabel>
              <FormSelect
                value={previousFieldOfStudy}
                onChange={(e) => setpreviousFieldOfStudy(e.target.value)}
                required>
                <option value="Arts">Arts</option>
                <option value="Biology">Biology</option>
                <option value="Business">Business</option>
                <option value="Engineering">Engineering</option>
                <option value="Information Technology" defaultValue>
                  Information Technology
                </option>
                <option value="Medical Science">Medical Science</option>
                <option value="Other">Other</option>
              </FormSelect>
              <FormLabel htmlFor="for">Desired course type</FormLabel>
              <FormSelect
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required>
                <option value="Undergraduate Diploma">
                  Undergraduate diploma
                </option>
                <option value="Bachelors" defaultValue>
                  Bachelor's degree
                </option>
                <option value="Postgraduate Diploma">
                  Postgraduate diploma
                </option>
                <option value="Masters">Master's degree</option>
                <option value="Phd">Phd</option>
              </FormSelect>
              <FormLabel htmlFor="for">
                Field of study of desired course
              </FormLabel>
              <FormSelect
                value={fieldOfStudy}
                onChange={(e) => setfieldOfStudy(e.target.value)}
                required>
                <option value="Arts">Arts</option>
                <option value="Biology">Biology</option>
                <option value="Business">Business</option>
                <option value="Engineering">Engineering</option>
                <option value="Information Technology" defaultValue>
                  Information Technology
                </option>
                <option value="Medical Science">Medical Science</option>
                <option value="Other">Other</option>
              </FormSelect>
              <FormLabel htmlFor="for">
                Relevant work experience (in years)
              </FormLabel>
              <FormInput
                type="number"
                placeholder="Relevant work experience (in years)"
                value={relevantExperince}
                onChange={(e) => setrelevantExperience(e.target.value)}
                required
              />
              <FormLabel htmlFor="for">
                Family income (in CAD, per year)
              </FormLabel>
              <FormInput
                type="number"
                placeholder="Family income (in CAD, per year)"
                value={familyIncome}
                onChange={(e) => setFamilyIncome(e.target.value)}
                required
              />
              <FormButton type="submit" onClick={saveUserDetails}>
                Submit
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
