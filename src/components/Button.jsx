import styled from "styled-components";

const StyledButton = styled.button`
  height: 28px;
  padding: 6px 16px;
  font-weight: 500;
  font-size: 13px;
  color: #fff;
  border: 0px;
  border-radius: 4px;
  outline: 0px;
  background-color: #2196f3;
  box-sizing: border-box;
  cursor: pointer;

  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.12);
    cursor: default;
  }
`;

export default function Button({ disabled, text, onClick }) {
  return (
    <StyledButton disabled={disabled} type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
}
