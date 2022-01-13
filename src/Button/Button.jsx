import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: white;

  &:hover,
  &:focus {
    background-color: lightgrey;
    color: blue;
    outline-color: blue;
  }

  &:active {
    box-shadow: 0px 5px 10px 2px rgba(151, 163, 172, 0.5) inset;
  }
`;

const Button = ({ type, title, onDeleteItem, idToDelete, children }) => {
  const buttonType = type;
  return (
    <>
      {buttonType === 'button' ? (
        <FormButton type={buttonType} onClick={() => onDeleteItem(idToDelete)}>
          {title}
          {children}
        </FormButton>
      ) : (
        <FormButton type={buttonType}>
          {title}
          {children}
        </FormButton>
      )}
    </>
  );
};
export default Button;
