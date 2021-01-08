import React from 'react';
import styled from 'styled-components';
import SEO from 'components/molecules/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import MainBackground from 'components/molecules/MainBackground/MainBackground';
import ContactSection from 'components/organisms/ContactSection/ContactSection';

const ContactSectionWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.gray200};
  padding: 16px 0;
  position: relative;
`;

const StyledContactSection = styled(ContactSection)`
  ${({ theme }) => theme.mq.desktop} {
    div {
      width: 100%;
    }
  }
`;

const StyledMainBackground = styled(MainBackground)`
  background-image: none;
  background-position: 0 0;
  background-size: auto;
  padding: 0;
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 55px;
  margin-top: 73px;

  ${({ theme }) => theme.mq.desktop} {
    padding-left: 50px;
  }
`;

const ContactPage = () => (
  <>
    {' '}
    <SEO
      title="Do you want to help? Contact organizators of the Happier program"
      description="We invite those willing to contribute to the website. Do you have any idea how you can help? Send a message and start acting!"
    />
    <MainTemplate>
      <BarWrapper />
      <StyledMainBackground>
        <ContactSectionWrapper>
          <StyledContactSection
            labelText="Do you want to help? Contact us!"
            headingText="Write a message to organizators of the Happier program"
          />
        </ContactSectionWrapper>
      </StyledMainBackground>
    </MainTemplate>
  </>
);

export default ContactPage;
