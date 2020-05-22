import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import iconArrow from 'images/icons/icon_arrow.svg';
import iconMale from 'images/icons/icon_sexMale.svg';
import iconFemale from 'images/icons/icon_sexFemale.svg';

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

const RadioWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  div {
    background-image: url(${iconMale});
    background-repeat: no-repeat;
    background-position: 100% 0%;
    background-size: 50%;
    width: 50px;
    margin-top: 5px;
    padding: 10px;
    margin-left: 10px;
  }

  div:last-child {
    background-image: url(${iconFemale});
    background-size: 48%;
    margin-top: 10px;
  }
`;

const InputSelect = ({ field, name, values, checked }) => (
  <InputSelectLabel htmlFor={field}>
    {name}
    {field === 'sex' ? (
      <RadioWrapper>
        <div>
          <input
            type="radio"
            id={values[0]}
            name={field}
            value={name}
            checked={checked}
          />
        </div>
        <div>
          <input
            type="radio"
            id={values[1]}
            name={field}
            value={name}
            checked={checked}
          />
        </div>
      </RadioWrapper>
    ) : (
      <select name={name} id={field}>
        <option value="all">Wszystkie</option>
        {values.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    )}
  </InputSelectLabel>
);

InputSelect.propTypes = {
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  checked: PropTypes.bool,
};

InputSelect.defaultProps = {
  checked: null,
};

export default InputSelect;
