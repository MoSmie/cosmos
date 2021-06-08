import styled from "styled-components";
import img from '../../../img/cloud.svg';

interface ProprsClound {
  isFirst?: boolean;
}

export const Cloud = styled.div<ProprsClound>`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  width:  ${props => (props.isFirst ? "55px" : "65px")};
  height:  ${props => (props.isFirst ? "52px" : "62px")};
  z-index: 300;
  position: absolute;
  top: ${props => (props.isFirst ? "3px" : "-5px")};
  right: ${props => (props.isFirst ? "-274px" : "-152px")};
  transform:  ${props => (props.isFirst ? "rotateY(180deg)" : "rotateY(1deg)")};

`

export default Cloud;
