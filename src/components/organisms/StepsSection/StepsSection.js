import React from 'react';
import styled from 'styled-components';
import Label from 'components/atoms/Label/Label';
import Step from 'components/molecules/Step/Step';
import pawsImg from 'images/pawsSteps.svg';

const StepsSectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.primary};

  ${({ theme }) => theme.mq.tablet} {
    :before {
      content: '';
      position: absolute;
      left: 40%;
      top: 16%;
      width: 255px;
      height: 700px;
      background-image: url(${pawsImg});
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 0 auto;
  }
`;

// const fade = keyframes`
//   25%  {opacity: 1;}
//   100% {opacity: 0;}
// `;

// const move = (toRight, dawn, turn = 180) => {
//   const step = keyframes`
//   0%  {transform: translate(0, 0) rotate(180deg);  }
//   100% {transform: translate(${toRight}px, ${dawn}px) rotate(${turn}deg); opacity: 1; }
// `;
//   return step;
// }

const StepsWrapper = styled.div`
  padding: 50px 20px;
  margin-top: 80px;
  counter-reset: step;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 50px;
  position: relative;
`;

const StepsSection = () => (
  <StepsSectionWrapper>
    <Label text="3 kroki do przygarnięcia pupila" />
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
