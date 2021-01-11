import React from 'react';
import SEO from 'components/molecules/SEO/seo';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Button from 'components/atoms/Button/Button';

const BackgroundImgWrappper = styled(BackgroundImage)`
  margin-top: 74px;
  width: 100%;
  height: calc(100vh - 100px);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeadersWrapper = styled.div`
  position: absolute;
  padding: 20px;
  color: ${({ theme }) => theme.white};
  min-height: 300px;

  h1,
  h2 {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mq.tablet} {
    max-width: 90%;
  }
`;

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "404" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO
        title="Error 404 | Page not found"
        description="Sorry, but the site you are looking for has not been found"
      />
      <MainTemplate>
        <BackgroundImgWrappper
          fluid={data.file.childImageSharp.fluid}
          role="img"
          aria-label="Dog tracks on the beach"
        >
          <HeadersWrapper>
            <h1>
              The site you are looking for needed movement and went for a
              walk...
            </h1>
            <h2>The tide will wash away its traces ☺</h2>
            <Button onClick={() => navigate('/')}>Return to home page</Button>
          </HeadersWrapper>
        </BackgroundImgWrappper>
      </MainTemplate>
    </>
  );
};

export default NotFoundPage;
