import styled from "styled-components";

interface RowP {
  justifyContent?: string;
}
export const Row = styled.div<RowP>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
  props.justifyContent ? "center" : "space-between"};
`;

export default Row;
