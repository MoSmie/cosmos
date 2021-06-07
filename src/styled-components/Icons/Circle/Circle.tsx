import styled from "styled-components";

interface CircleP {
  top?: string;
  left?: string;
  right?: string;
}

export const Circle = styled.div<CircleP>`
  width: 221px;
  height: 228px;
  padding: 2rem;
  position: relative;
  background: linear-gradient(180deg, #2B2347 0%, #221B3A 100%);
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top ? props.top : "auto"};
  left: ${props => props.left ? props.left : "auto"};
  right: ${props => props.right ? props.right : "auto"};

`

export default Circle;
