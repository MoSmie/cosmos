import styled from "styled-components";
import img from '../../../img/planet.png';


export const Planet = styled.div`
 background-image: url(${img});
  background-repeat: no-repeat;
  height: 375px;
  width: 375px;
  background-size: contain;
  margin-top: -60px;
  z-index: 100;
`

export default Planet;
