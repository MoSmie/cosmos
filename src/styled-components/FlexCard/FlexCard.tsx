import styled from "styled-components";


interface FlexCardProp {
  imgPath?: string;
}

const FlexCard = styled.div<FlexCardProp>`
  position: relative;
  height: 208px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  margin: 16px 15px;
  flex: 1 0 auto;
  min-width: 160px;
  max-width: 160px;
  z-index: 950;
  cursor: pointer;
`

export default FlexCard;
