import styled from "styled-components";


interface FlexCardProp {
  imgPath?: string;
}

const FlexCard = styled.div<FlexCardProp>`
  height: 208px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  margin: 16px 15px;
  flex: 1 0 auto;
  min-width: 160px;
  max-width: 160px;
  border-radius: 10px;
  transition: 0.3s;
  z-index: 950;
  cursor: pointer;
  background-size: cover;
  background-color: #221b3a;
  justify-content: center;
  background-image:linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, rgba(43, 34, 74, 1) 100%), url(${props => props.imgPath});

`

export default FlexCard;

// &:hover {
//   background-image: linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%),  ${props => props.imgPath};
//  background-image: linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, rgba(43, 34, 74, 1) 100%), url(${props => props.imgPath});

// }