import styled from "styled-components";


interface CenterProp {
   margin?: string;
}

export const Centered = styled.div<CenterProp>`
  justify-content: center;
  display: flex;
  margin: ${props => props.margin ? props.margin : "0px"};
  height: fit-content;
`

export default Centered;
