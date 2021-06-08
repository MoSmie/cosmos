import styled from "styled-components";
import img from '../../../img/rocket.svg';


export const Rocket = styled.div`
  background-image: url(${img});
  background-size: cover;
  height: 140px;
  width: 102px;
  margin-top: -80px;
  background-repeat: no-repeat;
  z-index: 500;
  position: absolute;
  top: -7px;
  margin-right: -370px;
}

`

export default Rocket;
