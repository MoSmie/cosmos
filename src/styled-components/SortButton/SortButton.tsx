import styled from "styled-components";

interface SortBtn {
  isActive?: boolean;
}

export const SortButton = styled.div<SortBtn>`
  width: 215px;
  background-color: ${props => (props.isActive ? "#251D42" : "#342a56")};
  height: 20px;
  padding: 10px 16px;
  border-radius: 4px;
  color: #a094c6;
  font-weight: 600;
  text-transform: capitalize;
`;

export default SortButton;
