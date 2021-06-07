import styled from "styled-components";
import img from '../../../img/close.svg';
import imgH from '../../../img/closeH.svg';


export const CloseIcon = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  margin-top: 15px;
  transition: 0.15s;
  &:hover {
    background-image: url(${imgH});
  }

`

export default CloseIcon;
