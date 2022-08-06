import styled from "styled-components";

const StyledInput = styled.input`
  height: 28px;
  padding: 4px;
  border: 2px solid #ff9800;
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
`;

export default function Input({ id, value, placeholder, onChange }) {
  return (
    <>
      <label htmlFor={id}>
        <StyledInput type="text" id={id} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
    </>
  );
}
