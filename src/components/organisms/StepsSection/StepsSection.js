import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';
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

const StepsWrapper = styled.div`
  padding: 50px 20px;
  margin-top: 80px;
  counter-reset: step;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 250px 250px 250px;
  grid-gap: 50px;
  position: relative;
  overflow-x: hidden;
`;

const StepsSection = () => (
  <StepsSectionWrapper>
    <Label text="3 steps to adopt a pet" />
    <StepsWrapper>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={400}
            to={{
              transform: isVisible ? 'translateX(0)' : 'translateX(50vw)',
            }}
          >
            {props => (
              <Step
                even
                heading="First step"
                content="Aenean pharetra enim eu metus mollis bibendum tincidunt in dolor. Fusce sollicitudin, metus non consectetur posuere, lorem nunc porttitor nunc"
                style={{ ...props }}
              />
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={400}
            to={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-40vw)',
            }}
          >
            {props => (
              <Step
                odd
                heading="Second step"
                content="Aenean pharetra enim eu metus mollis bibendum tincidunt in dolor. Fusce sollicitudin, metus non consectetur posuere, lorem nunc porttitor nunc"
                style={{ ...props }}
              />
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={400}
            to={{
              transform: isVisible ? 'translateX(0)' : 'translateX(50vw)',
            }}
          >
            {props => (
              <Step
                even
                heading="Third step "
                content="Aenean pharetra enim eu metus mollis bibendum tincidunt in dolor. Fusce sollicitudin, metus non consectetur posuere, lorem nunc porttitor nunc"
                style={{ ...props }}
              />
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </StepsWrapper>
  </StepsSectionWrapper>
);

export default StepsSection;
