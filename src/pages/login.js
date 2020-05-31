/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// import styled from 'styled-components';
import { FirebaseContext } from 'components/Firebase/context';
import { navigate } from 'gatsby';
import AuthTemplate from 'templates/AuthTemplate/AuthTemplate';
import H1 from 'components/atoms/H1/H1';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import StyledLink from 'components/atoms/StyledLink/StyledLink';

const LoginPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [errMessage, setErrMessage] = useState('');
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  let isMounted = true;

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .login({ email: formValues.email, password: formValues.password })
      .catch(err => {
        if (isMounted) {
          setErrMessage(err.message);
        }
      })
      .then(() => navigate('/'));
  };

  const handleInputChange = e => {
    e.persist();
    setErrMessage('');
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AuthTemplate onSubmit={handleSubmit}>
      <H1 white>Zaloguj się</H1>
      {!!errMessage && <p color="red">{errMessage}</p>}
      <Input
        value={formValues.email}
        name="email"
        onChange={handleInputChange}
        placeholder="email"
        type="email"
        required
      />
      <Input
        value={formValues.password}
        name="password"
        onChange={handleInputChange}
        placeholder="password"
        type="password"
        required
      />
      <Button type="submit">Zaloguj się</Button>
      <StyledLink white to="/register">
        Nie masz konta? Zarejestruj się!
      </StyledLink>
    </AuthTemplate>
  );
};

export default LoginPage;
