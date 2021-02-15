import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from 'components/atoms/Label/Label';
import MessageBox from 'components/atoms/MessageBox/MessageBox';
import H2 from 'components/atoms/H2/H2';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const MessageWrappper = styled.div`
  padding: 15px 20px 20px 20px;
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
  const initialFormValues = {
    subject: '',
    email: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [message, setMessage] = useState({ content: null, success: false });
  let isMounted = true;

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const resetFormVelues = () => setFormValues(initialFormValues);

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage({
      content: '',
      success: true,
    });

    // eslint-disable-next-line no-undef
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formValues }),
    })
      .then(() =>
        setMessage({
          content: 'Message has been sent, thank you for your interest.',
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

    resetFormVelues();
  };

  const handleInputChange = e => {
    e.persist();
    setMessage({ content: null });
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Label text={labelText} />
      <MessageWrappper>
        {message.content !== null && (
          <MessageBox success={message.success}>{message.content}</MessageBox>
        )}
        <H2>{headingText}</H2>
        <Paragraph>{paragraphText}</Paragraph>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input
            value={formValues.subject}
            name="subject"
            onChange={handleInputChange}
            placeholder="subject"
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
