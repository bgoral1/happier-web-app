import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FirebaseContext } from 'context/Firebase/context';
import H1 from 'components/atoms/H1/H1';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import MessageBox from 'components/atoms/MessageBox/MessageBox';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px 20px 20px;
  min-height: 55vh;
  background-color: ${({ theme }) => theme.gray200};
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  overflow: hidden;
`;

const AddInstitution = () => {
  const { firebase } = useContext(FirebaseContext);
  const [message, setMessage] = useState({ content: null, success: false });
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    city: '',
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
      .addInstitutionRole({
        email: formValues.email,
      })
      .catch(err => {
        if (isMounted) {
          setMessage({
            content: err.message,
            success: false,
          });
        }
      });

    firebase
      .addToInstitutions({
        name: formValues.name,
        email: formValues.email,
        city: formValues.city,
      })
      .then(() => {
        setMessage({
          content: `${formValues.name.toUpperCase()} has been successfully added to database`,
          success: true,
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

  return (
    <Background>
      <FormWrapper onSubmit={handleSubmit}>
        <H1>Add Animal Shelter</H1>
        {message.content !== null && (
          <MessageBox success={message.success}>{message.content}</MessageBox>
        )}
        <Input
          value={formValues.name}
          name="name"
          onChange={handleInputChange}
          placeholder="Shelter name"
          type="name"
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
          value={formValues.city}
          name="city"
          onChange={handleInputChange}
          placeholder="city"
          type="city"
          required
        />
        <Button type="submit">Confirm</Button>
        <Link to="/">Return to home page</Link>
      </FormWrapper>
    </Background>
  );
};

export default AddInstitution;
