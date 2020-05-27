/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
// import styled from 'styled-components';
import { FirebaseContext } from 'components/Firebase/context';
import { navigate } from 'gatsby';
import AuthTemplate from 'templates/AuthTemplate/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const RegisterPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [errMessage, setErrMessage] = useState('');

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({
          userName: formValues.userName,
          email: formValues.email,
          password: formValues.password,
        })
        .catch(err => {
          setErrMessage(err.message);
        })
        .then(() => navigate('/'));
    } else setErrMessage('Password and confirmed password must match');
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
      <Heading white>Zarejestruj się</Heading>
      {!!errMessage && <p color="red">{errMessage}</p>}
      <Input
        value={formValues.userName}
        name="userName"
        onChange={handleInputChange}
        placeholder="user name"
        type="text"
        required
      />
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
        minLength={6}
        required
      />
      <Input
        value={formValues.confirmPassword}
        name="confirmPassword"
        onChange={handleInputChange}
        placeholder="confirm password"
        type="password"
        minLength={6}
        required
      />
      <Button type="submit">Zarejestruj się</Button>
    </AuthTemplate>
  );
};

export default RegisterPage;
