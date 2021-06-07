import styled from "styled-components";

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 32px;
  background: #7860d7;
  border-radius: 8px;
  color: #def4f6;
  text-align: center;
  background-color: #7860d7;
  font-weight: bold;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #53477d;
  }
`;

export default Button;
