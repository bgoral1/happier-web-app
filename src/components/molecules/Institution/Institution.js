import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';
import iconLocalization from 'images/icons/icon_localization.svg';
import iconInstitution from 'images/icons/icon_institution.svg';

const InstitutionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  ${({ theme }) => theme.mq.tablet} {
    width: 25%;
  }
`;

const IconWrappper = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 70px;
    height: 65px;

    path {
      fill: ${({ theme }) => theme.grey900};
    }
  }
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.font.size.s};
  font-size: ${({ theme }) => theme.font.weight.semiBold};
  margin: 10px;
  text-align: center;
  text-transform: capitalize;
`;

const LocalizationWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: auto;
    padding-right: 5px;
  }
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-size: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.font.weight.grey900};
  text-transform: capitalize;
`;

const Institution = ({ name, localization, ...props }) => (
  <InstitutionWrapper {...props}>
    <IconWrappper>
      <Icon src={iconInstitution} />
    </IconWrappper>
    <H4>{name}</H4>
    <LocalizationWrapper>
      <Icon src={iconLocalization} />
      <Paragraph> {localization}</Paragraph>
    </LocalizationWrapper>
  </InstitutionWrapper>
);

Institution.propTypes = {
  name: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
};

export default Institution;
