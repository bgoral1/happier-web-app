import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';
import iconLocalization from 'images/icon_localization.svg';
import iconInstitution from 'images/icon_institution.svg';

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
    height: auto;
  }
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.font.size.s};
  font-size: ${({ theme }) => theme.font.weight.semiBold};
  margin: 10px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-size: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.font.weight.grey900};
  display: flex;

  svg {
    width: 20px;
    height: auto;
    padding-right: 5px;
  }
`;

const Institution = ({ name, localization, ...props }) => (
  <InstitutionWrapper {...props}>
    <IconWrappper>
      <Icon src={iconInstitution} />
    </IconWrappper>
    <H4>{name}</H4>
    <Paragraph>
      <Icon src={iconLocalization} />
      {localization}
    </Paragraph>
  </InstitutionWrapper>
);

Institution.propTypes = {
  name: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
};

export default Institution;
