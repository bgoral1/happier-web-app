import styled from 'styled-components';

const PetFeature = styled.div`
  border: none;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  background-color: ${({ theme }) => theme.gray200};
  height: 32px;
  padding: 9px 25px;
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  margin: 5px;
`;

export default PetFeature;
