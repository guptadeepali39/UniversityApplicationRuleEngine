import React from 'react'
import { Container, Form, FormContent, FormWrap, Icon, FormH1, FormLabel, FormInput, FormButton, Text } from './SignInElements'

const SignIn = () => {
  return (
        <Container>
            <FormWrap>
                {/* <Icon to='/'>Rule Engine</Icon> */}
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign in</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
  )
}

export default SignIn