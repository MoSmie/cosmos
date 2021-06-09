import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import gsap from "gsap";
import Animations from "./components/Animations";

import MainConetent from "./styled-components/MainConetent";
import Gallery from "./styled-components/Gallery";
import Main from "./styled-components/Main";
import Circle from "./styled-components/Icons/Circle";
import CircleInner from "./styled-components/Icons/CircleInner";
import Dot from "./styled-components/Dot";

function App() {
  const tileTitle: string[] = ["capsules", "crew", "rockets", "starlink"];
  const [tileToOpen, setTileToOpen] = useState<null | string>(null);

  const handleOpenModal = (item: string) => {
    if (item !== null) {
      setTileToOpen(item);
    }
  };
  const handleCloseModal = () => {
    setTileToOpen(null);
  };

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      gsap.from("#circle", { duration: 2, rotation: 360, repeat: 20 });

      let d = gsap.timeline({ repeat: 20 });
      d.from("#dot", { duration: 0.8, scale: 1.3 });
      d.from("#dot", { duration: 1, scale: 0.7 });
    }, 1000);

    return () => window.clearTimeout(timeoutID);
  }, []);

  return (
    <Main>
      <NavBar />
      <MainConetent>
        <Gallery>
          {tileTitle.map((tile, key) => (
            <Card tile={tile} onOpenModal={handleOpenModal} key={key} />
          ))}
        </Gallery>
        <Animations />
      </MainConetent>
      <Footer />
      
      {tileToOpen !== null && (
        <Modal tileToOpen={tileToOpen} onClosed={handleCloseModal}></Modal>
      )}

      <Circle id="circle" top={"322px"} left={"-177px"}>
        <CircleInner id="circle" />
      </Circle>
      <Circle id="circle" top={"-165.82px"} left={"550px"}>
        <CircleInner />
      </Circle>
      <Circle id="circle" top={"322px"} right={"-100px"}>
        <CircleInner />
      </Circle>

      <Dot id="dot" top={"165.82px"} left={"450px"} color="#E34A67" />
      <Dot id="dot" top={"300px"} right={"20px"} color="#00C9B7" />
      <Dot id="dot" bottom={"300px"} right={"20px"} color="#7860D7" />
    </Main>
  );
}

export default App;
