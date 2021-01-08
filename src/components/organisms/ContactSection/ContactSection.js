import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from 'components/atoms/Label/Label';
import H2 from 'components/atoms/H2/H2';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const MessageWrappper = styled.div`
  padding: 0 20px 20px 20px;
  margin: 80px 20px 20px 20px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: -10px 0 15px rgba(0, 0, 0, 0.06);

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 60px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;

    ${({ theme }) => theme.mq.tablet} {
      input[type='text'] {
        width: calc(50% - 10px);
        margin-right: 20px;
      }

      input[type='email'] {
        width: calc(50% - 10px);
      }
    }
  }
`;

const StyledTextArea = styled(Input)`
  width: 100%;
  height: 30vh;
  border-radius: 20px;

  ${({ theme }) => theme.mq.desktop} {
    height: 35vh;
  }

  ::placeholder {
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`;

const ContactSection = ({ labelText, headingText, paragraphText }) => {
  const [formValues, setFormValues] = useState({
    topic: '',
    email: '',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
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
      <Label text={labelText} />
      <MessageWrappper>
        <H2>{headingText}</H2>
        <Paragraph>{paragraphText}</Paragraph>
        <form onSubmit={handleSubmit}>
          <Input
            value={formValues.topic}
            name="topic"
            onChange={handleInputChange}
            placeholder="topic"
            type="text"
            required
          />
          <Input
            value={formValues.email}
            name="email"
            onChange={handleInputChange}
            placeholder="your email"
            type="email"
            required
          />
          <StyledTextArea
            as="textarea"
            value={formValues.message}
            name="message"
            onChange={handleInputChange}
            placeholder="your message"
            type="textarea"
            required
          />
          <Button type="submit">Send</Button>
        </form>
      </MessageWrappper>
    </>
  );
};

ContactSection.propTypes = {
  labelText: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string,
};

ContactSection.defaultProps = {
  paragraphText:
    'Aenean quis lectus ex. Praesent mattis ante et nisl gravida, ac tincidunt',
};

export default ContactSection;
