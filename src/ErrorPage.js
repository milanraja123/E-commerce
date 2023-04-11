import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>404</h2>
        <h3>Uh OH! You're Lost.</h3>
        <p>
          This page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>

        <NavLink to="/">
          <Button>Go Back to Homepage</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;
