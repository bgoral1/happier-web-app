import React from 'react';
import styled from 'styled-components';
import Label from 'components/atoms/Label/Label';
import Institution from 'components/molecules/Institution/Institution';

const StepsSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.grey100};
`;

const InstitutionWrapper = styled.div`
  padding: 20px 20px;
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
`;

const InstitutionSection = () => (
  <StepsSectionWrapper>
    <Label toRight text="Instytucje biorące udział w programie" />
    <InstitutionWrapper>
      <Institution name="Schronisko Paluch" localization="Warszawa" />
      <Institution name="Schronisko Paluch" localization="Warszawa" />
      <Institution name="Schronisko Paluch" localization="Warszawa" />
      <Institution name="Schronisko Paluch" localization="Warszawa" />
    </InstitutionWrapper>
  </StepsSectionWrapper>
);

export default InstitutionSection;
