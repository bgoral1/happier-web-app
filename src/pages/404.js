import React from 'react';
import SEO from 'components/molecules/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const NotFoundPage = () => (
  <>
    <SEO
      title="Błąd 404 | Nie odnaleziono strony"
      description="Przykro nam, ale strona, której szukasz, nie została odnaleziona"
    />
    <MainTemplate>
      Przykro nam, ale strona, której szukasz, nie została odnaleziona...
    </MainTemplate>
  </>
);

export default NotFoundPage;
