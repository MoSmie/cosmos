import React, { useState } from "react";
import SortButton from "../styled-components/SortButton";
import Row from "../styled-components/Row";
import SortComponent, { SortCriteria } from "./Sort";

interface SortBtnP {
  fild: string;
  onSortUpdate(sort: SortCriteria): void;
}

function SortBtn(props: SortBtnP) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <SortButton isActive={hover} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Row>
        <div>{props.fild}</div>
        <SortComponent
          isHover={hover}
          onSortUpdate={props.onSortUpdate}
          value={props.fild}
        />
      </Row>
    </SortButton>
  );
}

export default SortBtn;
