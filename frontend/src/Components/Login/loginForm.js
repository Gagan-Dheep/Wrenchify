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

export function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const { switchToSignup } = useContext(AccountContext);

  const clearInput = async (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
};

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://localhost:5000/api/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            }),
            credentials: 'include'
        });

        if (response.ok) {
          console.log("logged in");
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
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={(e) => handleLogin(e)  && clearInput(e)}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}