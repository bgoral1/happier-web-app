import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FirebaseContext } from 'components/Firebase/context';
import H1 from 'components/atoms/H1/H1';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

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
  background-color: ${({ theme }) => theme.grey200};
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  overflow: hidden;
`;

const AddInstitution = () => {
  const { firebase } = useContext(FirebaseContext);
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);
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

    firebase
      .addInstitutionRole({
        email: formValues.email,
      })
      .catch(err => {
        if (isMounted) {
          setErrMessage(err.message);
        }
      });

    firebase
      .addToInstitutions({
        name: formValues.name,
        email: formValues.email,
        city: formValues.city,
      })
      .then(() => {
        setSuccess(true);
      })
      .catch(err => {
        if (isMounted) {
          setErrMessage(err.message);
        }
      });
  };

  const handleInputChange = e => {
    e.persist();
    setErrMessage('');
    setSuccess(false);
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Background>
      <FormWrapper onSubmit={handleSubmit}>
        <H1>Nadaj prawa instytucji</H1>
        {!!errMessage && <p color="red">{errMessage}</p>}
        <Input
          value={formValues.name}
          name="name"
          onChange={handleInputChange}
          placeholder="nazwa instytucji"
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
          placeholder="miasto"
          type="city"
          required
        />
        {!!success && <span>Instytucja została dodana do bazy</span>}
        <Button type="submit">Zatwierdź</Button>
        <Link to="/">Wróć do strony głównej</Link>
      </FormWrapper>
    </Background>
  );
};

export default AddInstitution;
