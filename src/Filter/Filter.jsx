import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const FormFilter = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  /* margin-bottom: 15px; */
`;

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: blue;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const Filter = ({ value, onChange, onClick }) => {
  return (
    <FormFilter>
      <FormLabel>
        Find contact by name:
        <InputWrapper>
          <Input type="text" name="filter" value={value} onChange={onChange} />
          <FaTimes onClick={onClick} />
        </InputWrapper>
      </FormLabel>
    </FormFilter>
  );
};

export default Filter;
