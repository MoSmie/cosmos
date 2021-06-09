import React, { useEffect, useState } from "react";
import { ICrewType, ICapsulesType, IStarlink, IRocketType } from "./Types";
import { SortCriteria } from "./Sort";
import { ReactComponent as Spinner } from "../img/spinner.svg";
import ModalList from "./ModalList";

import Row from "../styled-components/Row";
import ModalUnderlay from "../styled-components/ModalUnderlay";
import ModalWindow from "../styled-components/ModalWindow";
import ModalContent from "../styled-components/ModalContent";
import ModalGradient from "../styled-components/ModalGradient";
import Tbody from "../styled-components/Tbody";
import Thead from "../styled-components/Thead";
import ModalTitle from "../styled-components/ModalTitle";
import CloseIcon from "../styled-components/Icons/IconClose";
import Centered from "../styled-components/Centered";
import SortBtn from "./SortBtn";

function checkStatus(response: Response): Response {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw Error("failed to execute request");
  }
}

interface ModalProps {
  tileToOpen: any;
  onClosed(a: any): any;
}

function Modal(props: ModalProps) {
  const [spacePadData, setSpacePadData] = useState< null |
    Array<ICrewType | ICapsulesType | IStarlink | IRocketType>
  >([]);
  const [isSortedChaged, setIsSortedChanged] = useState(false);
  const [sortFields, setSortFields] = useState<string[]>([]);
  const [areWeLoading, setAreWeLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  let componentMounted = true; // (3) component is mounted


  const fetchData = () => {
    setError(null);
    console.log("GET feach");
    console.log(spacePadData);


    let requestOptions = {
      method: "GET",
    };

    fetch(`https://api.spacexdata.com/v4/${props.tileToOpen}`, requestOptions)
      .then(checkStatus)
      .then((response: Response) => response.json())
      .then((data: any) => {
        // if (componentMounted){ // (5) is component still mounted?

        if (props.tileToOpen === "crew") {
          setSpacePadData(data as ICrewType[]);
          setSortFields(["name", "agency"]);
        } else if (props.tileToOpen === "capsules") {
          setSpacePadData(data as ICapsulesType[]);
          setSortFields(["type", "status"]);
        } else if (props.tileToOpen === "starlink") {
          setSpacePadData(data as IStarlink[]);
          setSortFields(["version", "velocity_kms"]);
        } else if (props.tileToOpen === "rockets") {
          setSpacePadData(data as IRocketType[]);
          setSortFields(["name", "description"]);
        }
      
        setAreWeLoading(false);
    //   }
    //   return () => { // This code runs when component is unmounted
    //     componentMounted = false; // (4) set it to false if we leave the page
    // }
      })
      .catch((err: Error) => {
        setError("Error! Could not load data. Please try again.");
        setAreWeLoading(false);
      });
  };

  useEffect(() => {
    console.log("use effect")
    setAreWeLoading(true);
    fetchData();
    // const unsubscribe = fetchData(); //subscribe
    // return unsubscribe; //unsubscribe
  }, []);

  useEffect(() => {
    setIsSortedChanged(false);
  }, [isSortedChaged]);

  const handleClose = () => {
    props.onClosed(false);
    setSpacePadData(null)
    console.log(spacePadData)
  };

  const dynamicSort = (property: any, order: any) => {
    let sortOrder = 1;
    if (order === "desc") {
      sortOrder = -1;
    }

    return function (a: any, b: any) {
      if (a[property] < b[property]) {
        return -1 * sortOrder;
      } else if (a[property] > b[property]) {
        return 1 * sortOrder;
      } else {
        return 0 * sortOrder;
      }
    };
  };

  const handlSort = (sort: SortCriteria): void => {
    if (sort.descOrAsc === "none") {
      fetchData();
    } else {
      if (spacePadData !== null) {
      let newSort = spacePadData.sort(dynamicSort(sort.name, sort.descOrAsc));
      setSpacePadData(newSort);
    }
    }
    setIsSortedChanged(true);
  };

  return (
    <ModalUnderlay>
      <ModalWindow>
        <ModalContent>
          <Row>
            <ModalTitle> {props.tileToOpen} </ModalTitle>
            <CloseIcon onClick={handleClose} />
          </Row>

          {error !== null && (
            <Centered>
              <ModalTitle>{error}</ModalTitle>
            </Centered>
          )}
          <Centered>{areWeLoading && <Spinner />}</Centered>

          <table style={{borderSpacing: "0px"}}>
            <Thead>
              <tr>
                {sortFields.map((item, key) => (
                  <th key={key} style={{padding: "0px"}}>
                    <SortBtn fild={item} onSortUpdate={handlSort}></SortBtn>
                  </th>
                ))}
              </tr>
            </Thead>
            <Tbody>
              {spacePadData &&
                spacePadData.map((item, key) => (
                  <tr key={key}>
                    <td>
                      <ModalList
                        pole={item}
                        primeSortField={true}
                        title={props.tileToOpen}
                      />
                    </td>
                    <td>
                      <ModalList
                        key={key}
                        pole={item}
                        primeSortField={false}
                        title={props.tileToOpen}
                      />
                    </td>
                  </tr>
                ))}
            </Tbody>
          </table>
          <ModalGradient/>
        </ModalContent>
      </ModalWindow>
    </ModalUnderlay>
  );
}

export default Modal;
