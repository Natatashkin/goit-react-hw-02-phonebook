import styled from 'styled-components';

const AppForm = styled.form`
  /* display: flex;
  flex-direction: column; */
`;

const FormField = styled.div`
  position: relative;
  margin-right: 5px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 90%;
  padding: 5px;

  &:valid {
    border: 1px solid green;
    outline-color: green;
  }
  &:invalid {
    border: 1px solid red;
    outline-color: red;
  }

  &:not(:hover),
  &:not(:focus) {
    border: 1px solid black;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);

  ${Input}:focus + &&,
  ${Input}:hover + &&,
  ${Input}:not(:placeholder-shown) + && {
    transform: translateY(-35px);
    left: 0;
    font-size: 12px;
  }

  ${Input}:valid + && {
    color: green;
  }
  ${Input}:invalid + && {
    color: red;
  }

  ${Input}:placeholder-shown + &&,
  ${Input}:not(:focus) + && {
    color: black;
  }

  ${Input}:placeholder-shown:focus + && {
    color: red;
  }
`;

export { Input, FormField, AppForm, Label };
