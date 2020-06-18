import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import iconArrow from 'images/icons/icon_arrow.svg';

const InputSelectLabel = styled.label`
  @media (max-width: 359px) {
    width: 100%;
  }
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
    background-size: 16px 11px;
    min-width: 150px;
    margin-top: 5px;

    :focus {
      outline-color: none;
    }

    option {
      max-width: 100%;
      text-transform: capitalize;
    }
  }
`;

const InputSelect = ({
  field,
  name,
  values,
  opKey,
  onChange,
  selectedValue,
  mainPage,
}) => (
  <InputSelectLabel htmlFor={field}>
    {name}
    <select name={field} onChange={onChange} value={selectedValue}>
      {mainPage && <option value="all">Wszystkie</option>}
      {values.map(item => (
        <option key={`${item}${opKey}`} value={item}>
          {item}
        </option>
      ))}
    </select>
  </InputSelectLabel>
);

InputSelect.propTypes = {
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  opKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  mainPage: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
};

InputSelect.defaultProps = {
  mainPage: false,
  opKey: '',
  selectedValue: '',
};

export default InputSelect;
