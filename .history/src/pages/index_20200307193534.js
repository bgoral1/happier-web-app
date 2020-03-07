import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'

import SEO from '../components/seo'

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StyledDiv />
  </Layout>
)

export default IndexPage
