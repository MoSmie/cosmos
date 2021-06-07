import styled from "styled-components";

export const Tbody = styled.tbody`
  overflow: scroll;
  display: block;
  height: 240px;
  
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    margin-top: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 15px;
    height: 15px;
    background-color: #53477d;
    border-radius: 5px;
    &:hover {
      background-color: #6655a1;
    }
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }
`;

export default Tbody;
