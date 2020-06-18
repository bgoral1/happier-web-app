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

const H1White = styled(H1)`
  color: ${({ theme }) => theme.white};
`;
const StyledLinkWhite = styled(StyledLink)`
  color: ${({ theme }) => theme.white};
`;

const AgreementWrappper = styled.div`
  padding: 5px;
  color: white;
  font-size: ${({ theme }) => theme.font.size.xs};
  input {
    margin-right: 10px;
  }
`;

const RegisterPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [errMessage, setErrMessage] = useState('');

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
  });

  let isMounted = true;

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

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
          if (isMounted) {
            setErrMessage(err.message);
          }
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
      <H1White>Zarejestruj się</H1White>
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
      <AgreementWrappper>
        <label htmlFor="agreement">
          <input type="checkbox" id="agreement" name="agreement" required />
          Akceptuję Regulamin i Politykę prywatności
        </label>
      </AgreementWrappper>
      <Button type="submit">Zarejestruj się</Button>
      <StyledLinkWhite to="/login">
        Masz już konto? Zaloguj się!
      </StyledLinkWhite>
    </AuthTemplate>
  );
};

export default RegisterPage;
