import React from 'react';

// import styled from 'styled-components';
// import { Link } from 'gatsby'

import SEO from '../components/seo';
import Navigation from '../components/Navigation/Navigation';
import Button from '../comonents/Button/Button';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navigation />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </>
);

export default IndexPage;
