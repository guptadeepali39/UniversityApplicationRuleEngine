import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: white;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const LogoutBtn = styled.button`
  border-radius: 50px;
  background: #015cbf;
  white-space: nowrap;
  padding: 10px 22px;
  color: black;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #015cbf;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-right: 32px;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-right: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: white;
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 20px 32px;
  padding: 20px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 20px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #000;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  border: solid 1px grey;
`;

export const FormSelect = styled.select`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  border: solid 1px grey;
`;

export const FormButton = styled.button`
  background: #0d6efd;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0d6efd;
    background: white;
    border: solid 1px grey;
  }
`;

export const SignUpButton = styled(Link)`
  background: #0d6efd;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0d6efd;
    background: white;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
