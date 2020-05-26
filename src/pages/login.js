/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from 'components/Firebase/context';
import { Link, navigate, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Logo from 'components/atoms/Logo/Logo';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const LoginBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  ${({ theme }) => theme.mq.tablet} {
    width: 60%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 40%;
  }
`;

const LogoWrapper = styled(Link)`
  background-color: ${({ theme }) => theme.white};
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  height: 55vh;

  ${({ theme }) => theme.mq.tablet} {
    height: 45vh;
  }
`;

const LoginPage = ({ data }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .login({ email: formValues.email, password: formValues.password })
      .then(() => navigate('/'));
  };

  const handleInputChange = e => {
    e.persist();
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <LoginBackground
        fluid={data.file.childImageSharp.fluid}
        role="img"
        aria-label="Dog and human shaking hands"
      >
        <LoginWrapper>
          <LogoWrapper to="/">
            <Logo />
          </LogoWrapper>
          <FormWrapper onSubmit={handleSubmit}>
            <Heading white>Zaloguj się</Heading>
            <Input
              value={formValues.email}
              name="email"
              onChange={handleInputChange}
              placeholder="email"
              type="email"
            />
            <Input
              value={formValues.password}
              name="password"
              onChange={handleInputChange}
              placeholder="password"
              type="password"
            />
            <Button type="submit">Zaloguj się</Button>
          </FormWrapper>
        </LoginWrapper>
      </LoginBackground>
    </>
  );
};

export const query = graphql`
  query {
    file(name: { eq: "loginBcg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default LoginPage;
