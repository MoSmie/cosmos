import styled from "styled-components";

interface StyledCardProps {
  isHover?: boolean
}

const FlexCardGradient = styled.div<StyledCardProps>`
  height: 208px;
  width: 100%;
  position: absolute;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  justify-content: center;
  background-image:  ${props => (props.isHover ? "linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%)" : "linear-gradient(180deg, rgba(43, 34, 74, 0) 0%, rgba(43, 34, 74, 1) 100%)")};
`

export default FlexCardGradient;

