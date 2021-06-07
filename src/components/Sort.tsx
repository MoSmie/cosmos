import React, { useState, useEffect } from "react";
import Arrow from "../styled-components/Icons/Arrow";

export interface SortCriteria {
  name: string;
  descOrAsc: string | null;
}

export interface SortProps {
  onSortUpdate(sort: SortCriteria): void;
  value: string;
  isHover: boolean;
}


export function SortComponent(props: SortProps) {
  const [currentSort, setCurrentSort] = useState<string>("default");
  const [descOrAsc, setDescOrAsc] = useState<string | null>("none");
  const [sortValue, setSortValue] = useState<string | null>(props.value);

  useEffect(() => {

    if (descOrAsc !== null && sortValue !== null) {
      props.onSortUpdate({
        name: sortValue,
        descOrAsc: descOrAsc,
      });
    }
  // eslint-disable-next-line
  }, [sortValue, descOrAsc]);

  const sortTypes: any = {
    default: "default",
    up: "up",
    down: "down",
  };

  const handleSelectOrder = () => {
    handleSelectSortValue();

    let nextSort: string = "";
    if (currentSort === "down") {
      setDescOrAsc("none");
      nextSort = "default";
    } else if (currentSort === "up") {
      nextSort = "down";
      setDescOrAsc("desc");
    } else if (currentSort === "default") {
      nextSort = "up";
      setDescOrAsc("acs");
    }
    setCurrentSort(nextSort);
  };

  const handleSelectSortValue = () => {
    setSortValue(props.value);
  };

  return (
    <div onClick={handleSelectOrder}>
      <Arrow isHover={props.isHover}
        bg={
          process.env.PUBLIC_URL + `/images/arrow-${sortTypes[currentSort]}.svg`
        }
      ></Arrow>
    </div>
  );
}
export default SortComponent;
