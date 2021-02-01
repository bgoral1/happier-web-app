import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from 'context/Firebase/context';
import { navigate } from 'gatsby';
import AuthTemplate from 'templates/AuthTemplate/AuthTemplate';
import H1 from 'components/atoms/H1/H1';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import StyledLink from 'components/atoms/StyledLink/StyledLink';
import MessageBox from 'components/atoms/MessageBox/MessageBox';

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
    cursor: pointer;
  }
`;

const RegisterPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [message, setMessage] = useState({ content: null, success: false });

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

    setMessage({
      content: '',
      success: true,
    });

    firebase
      .checkLogin({ userName: formValues.userName })
      .then(() => {
        if (formValues.password === formValues.confirmPassword) {
          firebase
            .register({
              userName: formValues.userName,
              email: formValues.email,
              password: formValues.password,
            })
            .then(() =>
              setMessage({
                content:
                  'You have been registered, in a moment there will be a redirection to your panel',
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
        } else
          setMessage({
            content: 'Password and confirmed password must match',
            success: false,
          });
      })
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

  const handleLoginChange = () => {
    firebase
      .checkLogin({ userName: formValues.userName })
      .then(() =>
        setMessage({
          content: 'Username is available',
          success: true,
        })
      )
      .catch(err => {
        if (isMounted) {
          setMessage({
            content: err.message,
            success: false,
          });
        }
      });
  };

  return (
    <AuthTemplate onSubmit={handleSubmit}>
      <H1White>Create an account</H1White>
      {message.content !== null && (
        <MessageBox success={message.success}>{message.content}</MessageBox>
      )}
      <Input
        value={formValues.userName.toLowerCase()}
        name="userName"
        onChange={handleInputChange}
        onBlur={handleLoginChange}
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
          <input type="checkbox" id="agreement" name="agreement" required />I
          accept the Terms of Use and Privacy Policy
        </label>
      </AgreementWrappper>
      <Button type="submit">Sign up</Button>
      <StyledLinkWhite to="/login">Already a member? Sign in</StyledLinkWhite>
    </AuthTemplate>
  );
};

export default RegisterPage;
