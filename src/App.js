import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getFirebase from "./firebase";

import backgroundImage from "./background.png";
import SignUpForm from "./SignUpForm";

import SignInForm from "./SignInForm";
import SignOutButton from "./SignOutButton";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  return (
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Title>Subasta Empleos</Title>
      <Description>
        Sitio de subastas de empleados, dirigido para aquellas personas que quieran encontrar el mejor salario por su trabajo!
      </Description>
      <Description>
        {currentUser
          ? `Usuario: ${currentUser}.`
          : "Registrese para empezar!"}
      </Description>   
        {!currentUser &&
        <div>
          <SignUpForm />
          <SignInForm />

        </div>
        }
        
        {currentUser &&
        <div>
          <SignOutButton />
        </div>
        }

    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  color: #000;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 99%;
  height: 100%;
  background-size: contain;
  top: 0px;
  z-index: -1;
`;

