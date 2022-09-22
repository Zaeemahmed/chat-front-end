import styled from "styled-components";

export const DARK = "#131313";

export const InputField = styled.input`
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
`;

export const InputLabel = styled.label`
  color: #8f8f8f;
  font-size: 12px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2b09ff;
  color: #fff;
  border: none;
  outline: none;
  font-size: 15px;
  border-radius: 10px;
  padding: 25px;
  transition: 250ms background-color ease;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:active {
    cursor: pointer;
    background-color: #3415ff;
  }
  &:focus {
    background-color: #3415ff;
    border: 2px solid #fff;
  }
`;

export const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
