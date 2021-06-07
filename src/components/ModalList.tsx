import React from "react";
import ModalDetails from "../styled-components/ModalDetails";

interface ModalDetailsP {
  pole: any;
  primeSortField: boolean;
  title: string;
}

function ModalList(props: ModalDetailsP) {
  return (
    <ModalDetails>
      {props.primeSortField ? (
        <p>
          {props.title === "crew" && props.pole.name}
          {props.title === "capsules" && props.pole.type}
          {props.title === "rockets" && props.pole.name}
          {props.title === "starlink" && props.pole.version}
        </p>
      ) : (
        <p>
          {props.title === "crew" && props.pole.agency}
          {props.title === "capsules" && props.pole.status}
          {props.title === "rockets" && props.pole.description}
          {props.title === "starlink" && props.pole.velocity_kms}
        </p>
      )}
    </ModalDetails>
  );
}

export default ModalList;
