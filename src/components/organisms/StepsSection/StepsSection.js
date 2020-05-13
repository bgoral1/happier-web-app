import React from 'react';
import styled from 'styled-components';
import Label from 'components/atoms/Label/Label';
import Step from 'components/molecules/Step/Step';

const StepsSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.primary};
`;

const StepsWrapper = styled.div`
  padding: 50px 20px;
  margin-top: 80px;
  counter-reset: step;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 50px;
`;

const StepsSection = () => (
  <StepsSectionWrapper>
    <Label toRight text="3 kroki do przygarnięcia pupila" />
    <StepsWrapper>
      <Step
        even
        heading="First note of notes"
        content="Aenean pharetra enim eu metus mollis bibendum tincidunt in dolor. Fusce sollicitudin, metus non consectetur posuere, lorem nunc porttitor nunc"
      />
      <Step
        odd
        heading="Second note of notes"
        content="Aenean pharetra enim eu metus mollis bibendum tincidunt in dolor. Fusce sollicitudin, metus non consectetur posuere, lorem nunc porttitor nunc"
      />
      <Step
        even
        heading="Third note of notes "
        content="Aenean pharetra enim eu metus mollis bibendum tincidunt in dolor. Fusce sollicitudin, metus non consectetur posuere, lorem nunc porttitor nunc"
      />
    </StepsWrapper>
  </StepsSectionWrapper>
);

export default StepsSection;
