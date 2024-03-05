import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./marginer/index";
import { AccountContext } from './accountContext';

export function SignupForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("7878");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const { switchToSignin } = useContext(AccountContext);
  const clearInput = async (e) => {
    e.preventDefault();
    setName('');
    setPassword('');
    setEmail('');
    setMobile('');
    setConfirmPassword('');
};

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://localhost:5000/api/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                mobile,
                password,
                confirmPassword
            }),
            credentials: 'include'
        });

        if (response.ok) {
          console.log("signed in");
        }else {
            const errorData = await response.json();
            setErrorMessage(errorData.message);
            console.log(errorData.message);
        }
    } catch (error) {
        console.error('Error during signup/login:', error);
        setErrorMessage('An error occurred, please try again.');
    }
};

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" value={name} placeholder="Full name" onChange={(e) => setName(e.target.value)} />
        <Input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <Input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={(e) => handleSignUp(e) && clearInput(e)}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}