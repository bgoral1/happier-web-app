import React from 'react';
import styled from 'styled-components';
import iconArrow from 'images/icons/icon_arrow.svg';

const InputSelectLabel = styled.label`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  display: flex;
  flex-direction: column;
  padding: 5px 5px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 5px 10px;
  }

  select {
    background-color: white;
    padding: 15px 20px;
    border-radius: 10px;
    border: none;
    appearance: none;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    background-image: url(${iconArrow});
    background-repeat: no-repeat;
    background-position: 90% 50%;
    background-size: 12%;
    width: 150px;
    margin-top: 5px;

    :focus {
      outline-color: none;
    }

    option {
      max-width: 100%;
    }
  }
`;

const InputSelect = () => (
  <InputSelectLabel htmlFor="size">
    Wielkość
    <select name="Wielkość" id="size" multiple="">
      <option value="">Dowolna</option>
      <option value="0">Mały</option>
      <option value="1">Średni</option>
      <option value="2">Duży</option>
      <option value="3">Bardzo duży</option>
    </select>
  </InputSelectLabel>
);

export default InputSelect;
