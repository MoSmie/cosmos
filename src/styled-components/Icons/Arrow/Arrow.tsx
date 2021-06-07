import styled from "styled-components";

interface AProp {
  bg?: string;
  isHover?: boolean;
}

export const Arrow = styled.div<AProp>`
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  background-image: url(${props => props.bg});
  margin: 5px -7px;
  transition: 0.2s;
  display: ${props => (props.isHover ? "flex" : "none")};
`

export default Arrow;
