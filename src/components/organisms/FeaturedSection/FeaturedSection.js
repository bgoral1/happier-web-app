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
    <Featured iconsrc={iconLocalization} text="Wybór lokalizacji" />
    <Featured iconsrc={iconPaw} text="Kochający pupile" />
    <Featured iconsrc={logoHappierHeart} text="Przyjazny program" />
    <Featured iconsrc={iconInstitution} text="Wiarygodne instytucje" />
  </FeaturedWrapper>
);

export default FeaturedSection;
