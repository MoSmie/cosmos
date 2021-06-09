import React, { useState } from "react";
import FlexCard from "../styled-components/FlexCard";
import FlexCardGradient from "../styled-components/FlexCardGradient";
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

  return (
    <FlexCard
      onClick={() => handleOpen(props.tile)}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img
        src={process.env.PUBLIC_URL + `/images/${props.tile}.jpeg`}
        alt={props.tile}
        style={{ objectFit: "cover", maxWidth: "100%", borderRadius: "10px" }}
      />

      <FlexCardGradient isHover={hover}>
        <FlexCardDescription isHover={hover}>{props.tile}</FlexCardDescription>
      </FlexCardGradient>
    </FlexCard>
  );
}

export default Card;
