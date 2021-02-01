import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Label from 'components/atoms/Label/Label';
import Institution from 'components/molecules/Institution/Institution';

const StepsSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.gray100};

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 0 auto;
  }
`;

const InstitutionWrapper = styled.div`
  padding: 20px 20px;
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
`;

const InstitutionSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstitution {
        edges {
          node {
            city
            name
          }
        }
      }
    }
  `);

  return (
    <StepsSectionWrapper id="institutions">
      <Label toRight text="Shelters participating in the programme" />
      <InstitutionWrapper>
        {data.allInstitution.edges.map(edge => (
          <Institution
            key={edge.node.name}
            name={edge.node.name}
            localization={edge.node.city}
          />
        ))}
      </InstitutionWrapper>
    </StepsSectionWrapper>
  );
};

export default InstitutionSection;
