import React from "react";
import gsap from "gsap";

import Row from "../styled-components/Row";
import Centered from "../styled-components/Centered";
import Column from "../styled-components/Column";
import Rocket from "../styled-components/AnimationImg/Rocket";
import Planet from "../styled-components/AnimationImg/Planet";
import Cloud from "../styled-components/AnimationImg/Cloud";
import Button from "../styled-components/Button";

interface AnimationsP {}

function Animations(props: AnimationsP) {
  const handleRunAnimation = () => {
    const r = gsap.timeline({ repeat: 0 });
    r.to("#rocket", {
      duration: 0.8,
      y: 45,
      rotation: 40,
      ease: "bounce.inOut",
      repeat: 0,
    });
    r.to("#rocket", 1, {
      x: -30,
      y: 200,
      rotation: 10,
      ease: "power4.out",
      repeat: 0,
    });
    r.to("#rocket", 0.6, {
      duration: 1,
      rotation: 1,
      x: 200,
      scale: 3,
      ease: "sine.inOut",
      y: -600,
      repeat: 0,
    });
    r.to("#rocket", {
      duration: 1,
      y: 0,
      x: 0,
      rotation: 9,
      ease: "power2.inOut",
      scale: 1,
      repeat: 0,
    });
  
    const p = gsap.timeline({ repeat: 0 });
    p.to("#planet", {
      duration: 1.9,
      y: 0,
      x: 0,
      rotation: 9,
      ease: "power2.inOut",
      scale: 1,
      repeat: 0,
    });
    p.to("#planet", 0.3, {
      deley: 2,
      opacity: 0.5,
      rotation: 50,
      scale: 0,
      ease: "sine.inOut",
      repeat: 0,
    });
    p.to("#planet", {
      duration: 1,
      opacity: 1,
      rotation: 9,
      ease: "power2.inOut",
      scale: 1,
      repeat: 0,
      delay: 0.4,
    });
  
    const c1 = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    c1.to("#cloud1", { duration: 2, rotation: 360, scale: 1.5 });
    c1.to("#cloud1", { duration: 0.5, rotation: 360, scale: 1.5, opacity: 0 });
    c1.to("#cloud1", { duration: 1.5, rotation: -2, x: 0, scale: 1, opacity: 1,  delay: 0.8});
  
    const c2 = gsap.timeline({ repeat: 0,});
    c2.to("#cloud2", { duration: 1.8, rotation: -360 });
    c2.to("#cloud2", { duration: 1, rotation: 360, opacity: 0 });
    c2.to("#cloud2", { duration: 1.5, scale: 1, rotation: -3, opacity: 1, delay: 0.8 });
  };
  
  

  return (
    <Centered margin="-7px">
      <Column>
        <div>
          <Row justifyContent="center" style={{position: "absolute"}}>
            <Cloud isFirst id="cloud1" src={process.env.PUBLIC_URL + `/images/cloud.svg`}/>
            <Rocket id="rocket" src={process.env.PUBLIC_URL + `/images/rocket.svg`}/>
            <Cloud id="cloud2" src={process.env.PUBLIC_URL + `/images/cloud.svg`}/>
          </Row>
          <Planet  id="planet" src={process.env.PUBLIC_URL + `/images/planet.png`}/>
        </div>
        <Centered margin={"20px"}>
          <Button onClick={handleRunAnimation}>Launch Rocket!</Button>
        </Centered>
      </Column>
    </Centered>
  );
}

export default Animations;
