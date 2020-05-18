import styled from 'styled-components';

const PetImage = styled.img`
  width: 330px;
  height: 251px;
  position: absolute;
  bottom: -25px;
  left: 5px;
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

export default PetImage;
