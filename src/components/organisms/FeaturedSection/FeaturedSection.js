import React from 'react';
import styled from 'styled-components';
import Featured from 'components/molecules/Featured/Featured';
import iconLocalization from 'images/icons/icon_localization.svg';
import iconPaw from 'images/icons/icon_paw.svg';
import logoHappierHeart from 'images/logo_happier_heart.svg';
import iconInstitution from 'images/icons/icon_institution.svg';

const FeaturedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 0 auto;
  }
`;

const FeaturedSection = () => (
  <FeaturedWrapper>
    <Featured iconsrc={iconLocalization} text="Location selection" />
    <Featured iconsrc={iconPaw} text="Loving pets" />
    <Featured iconsrc={logoHappierHeart} text="Friendly program" />
    <Featured iconsrc={iconInstitution} text="Proven institutions" />
  </FeaturedWrapper>
);

export default FeaturedSection;
