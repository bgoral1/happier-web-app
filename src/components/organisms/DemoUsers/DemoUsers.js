import React from 'react';
import styled from 'styled-components';
import Featured from 'components/molecules/Featured/Featured';
import iconUser from 'images/icons/icon_user.svg';
import iconInstitution from 'images/icons/icon_institution.svg';
import iconAdmin from 'images/icons/icon_admin.svg';

const DemoUsersWrapper = styled.div`
  background-color: ${({ theme }) => theme.gray200};
  border: 1px solid ${({ theme }) => theme.gray900};
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
`;

const H5 = styled.h5`
  margin: 5px 0 5px 5px;
`;

const FeaturedWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledFeatured = styled(Featured)`
  flex-grow: 1;
  text-align: center;
  cursor: pointer;

  > div {
    align-self: stretch;
  }

  svg {
    width: 50px;
    height: 50px;

    path {
      fill: ${({ theme }) => theme.secondary};
    }
  }

  p {
    height: 42px;
  }

  :hover path {
    fill: ${({ theme }) => theme.primaryDark};
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 110px;
  }
`;

const DemoUsers = () => (
  <DemoUsersWrapper>
    <H5>Demo Users:</H5>
    <FeaturedWrapper>
      <StyledFeatured iconsrc={iconUser} text="Common User" />
      <StyledFeatured iconsrc={iconInstitution} text="Animal Shelter" />
      <StyledFeatured iconsrc={iconAdmin} text="Administrator" />
    </FeaturedWrapper>
  </DemoUsersWrapper>
);

export default DemoUsers;
