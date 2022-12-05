import styled from 'styled-components';

export const FormContainer = styled.div`
  padding-top: 20px;
  padding-left: 30px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Label = styled.label`
  display: block;
  font-size: 24px;
`;
export const Input = styled.input`
  display: block;
  margin-top: 5px;
`;
export const ButtonThumb = styled.div``;
export const Button = styled.button`
  padding: 4px 5px;
  margin: 0;
  border: 1px solid black;
  background-color: inherit;
  border-radius: 20px;
  font-size: 18px;
  &:hover {
    scale: 1.1;
  }
`;
