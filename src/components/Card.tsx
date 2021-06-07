import React, { useState } from "react";
import FlexCard from "../styled-components/FlexCard";
import FlexCardHover from "../styled-components/FlexCardHover";

import FlexCardDescription from "../styled-components/FlexCardDescription";

interface CardProps {
  tile: string;
  onOpenModal(name: string): any;
}

function Card(props: CardProps) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const handleOpen = (route: string) => {
    props.onOpenModal(route);
  };
  const style = {
    backgroundImage: `url(/images/${props.tile}.png)`,
  };
  const styleHover = {
    backgroundImage: `linear-gradient(0deg, rgba(43, 34, 74, 0.92) 7.69%, rgba(70, 58, 113, 0.92) 100%), url(/images/${props.tile}.png)`,
  };
  // bg={
  //   process.env.PUBLIC_URL + `/images/arrow-${sortTypes[currentSort]}.svg`
  //  //imgPath={process.env.PUBLIC_URL + `/images/${props.tile}.png`}

  // }
  return (
    <FlexCard
      imgPath= {process.env.PUBLIC_URL + `/images/${props.tile}.png`}
      onClick={() => handleOpen(props.tile)}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {hover && (
        <FlexCardHover>
          <FlexCardDescription isHover={hover}>
            {props.tile}
          </FlexCardDescription>
        </FlexCardHover>
      )}
      {hover === false && (
          <FlexCardDescription isHover={hover}>
            {props.tile}
          </FlexCardDescription>
      )}
    </FlexCard>
  );
}

export default Card;
