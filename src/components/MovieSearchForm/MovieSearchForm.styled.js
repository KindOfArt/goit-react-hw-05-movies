import styled from 'styled-components';

export const FormContainer = styled.div`
  padding-top: 20px;
  padding-left: 30px;
`;
export const Form = styled.form`
  outline: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 5px;
  box-shadow: 1px 1px 5px 1px black;
  border-radius: 10px;
`;
export const Label = styled.label`
  display: block;
  font-size: 24px;
`;
export const Input = styled.input`
  display: block;
  border-radius: 10px;
  padding: 5px;
  margin-top: 5px;
  box-shadow: 0px 0px 30px 1px black;

  &:focus {
    outline: none;
  }
`;
export const ButtonThumb = styled.div``;
export const Button = styled.button`
  padding: 4px 5px;
  margin: 0;
  border: 1px solid black;
  background-color: black;
  color: white;
  border-radius: 20px;
  font-size: 18px;
  box-shadow: 1px 1px 5px 1px black;

  &:hover {
    scale: 1.1;
    box-shadow: 1px 1px 8px 1px black;
  }
`;
