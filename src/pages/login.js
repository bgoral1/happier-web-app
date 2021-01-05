/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from 'context/Firebase/context';
import { navigate } from 'gatsby';
import AuthTemplate from 'templates/AuthTemplate/AuthTemplate';
import H1 from 'components/atoms/H1/H1';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import StyledLink from 'components/atoms/StyledLink/StyledLink';
import DemoUsers from 'components/organisms/DemoUsers/DemoUsers';
import MessageBox from 'components/atoms/MessageBox/MessageBox';
import { demoUsersData } from 'src/data/demoUsers';

const H1White = styled(H1)`
  color: ${({ theme }) => theme.white};
`;
const StyledLinkWhite = styled(StyledLink)`
  color: ${({ theme }) => theme.white};
`;

const LoginPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [message, setMessage] = useState({ content: null, success: false });
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  let isMounted = true;

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setMessage({
      content: '',
      success: true,
    });
    firebase
      .login({ email: formValues.email, password: formValues.password })
      .then(() =>
        setMessage({
          content:
            'Zostałeś zalogowany, za chwilę nastąpi przekierowanie do Twojego panelu',
          success: true,
        })
      )
      .then(() => setTimeout(() => navigate('/panel'), 1000))
      .catch(err => {
        if (isMounted) {
          setMessage({
            content: err.message,
            success: false,
          });
        }
      });
  };

  const handleInputChange = e => {
    e.persist();
    setMessage({ content: null });
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value.toLowerCase(),
    }));
  };

  const chooseDemoUser = type => {
    setMessage({ content: null });
    if (type === 'commonUser') {
      setFormValues({
        email: demoUsersData[0].email,
        password: demoUsersData[0].password,
      });
    } else if (type === 'animalShelter') {
      setFormValues({
        email: demoUsersData[1].email,
        password: demoUsersData[1].password,
      });
    } else {
      setFormValues({
        email: demoUsersData[2].email,
        password: demoUsersData[2].password,
      });
    }
  };

  return (
    <AuthTemplate onSubmit={handleSubmit}>
      <H1White>Zaloguj się</H1White>
      {message.content !== null && (
        <MessageBox success={message.success}>{message.content}</MessageBox>
      )}
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
      <StyledLinkWhite to="/register">
        Nie masz konta? Zarejestruj się!
      </StyledLinkWhite>
      <DemoUsers chooseDemoUser={chooseDemoUser} />
    </AuthTemplate>
  );
};

export default LoginPage;
