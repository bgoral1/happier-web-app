import React from 'react';
import SEO from 'components/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <MainTemplate>404</MainTemplate>
  </>
);

export default NotFoundPage;
