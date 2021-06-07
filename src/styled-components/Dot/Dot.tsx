import styled from "styled-components";

interface DotP {
  top?: string;
  left?: string;
  right?: string;
  bottom? : string;
  color: string;
}

export const Dot = styled.div<DotP>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  background: ${props => props.color ? props.color : "red"};;
  top: ${props => props.top ? props.top : "auto"};
  left: ${props => props.left ? props.top : "auto"};
  right: ${props => props.right ? props.top : "auto"};
  bottom: ${props => props.bottom ? props.bottom : "auto"};

  z-index: 10;

`

export default Dot;
