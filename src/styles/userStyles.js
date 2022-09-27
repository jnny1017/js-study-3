import styled from "styled-components";

export const Wrap = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 0;

  label {
    flex: 1;
  }

  input {
    width: 100%;
  }
`;

export const CardWrap = styled.div`
  border-top: 1px solid #ddd;
`;

export const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  margin-top: 24px;
  padding: 8px;
  background: #eee;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
  }

  strong {
    font-size: 18px;
  }

  p:first-of-type {
    color: #ff9800;
    font-size: 16px;
  }

  p:last-of-type {
    font-size: 13px;
  }

  button {
    position: absolute;
    bottom: 20px;
    right: 16px;
  }
`;
