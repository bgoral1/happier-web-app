import React from 'react';
import SEO from 'components/molecules/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const NotFoundPage = () => (
  <>
    <SEO
      title="Error 404 | Page not found"
      description="Sorry, but the site you are looking for has not been found"
    />
    <MainTemplate>
      <h1>
        The site you are looking for needed movement and went for a walk...
      </h1>
      <h2>The tide will wash away her traces ♥</h2>
    </MainTemplate>
  </>
);

export default NotFoundPage;
