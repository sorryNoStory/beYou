import React, { useRef, useEffect } from "react";
import gsap from "gsap/all";

import lflogo from "./img/partners/lflogo.png";
import careto from "./img/partners/careto.png";
import iherb from "./img/partners/iherb.png";
import sephora from "./img/partners/sephora.png";

function Partners() {
    const partnerRefs = useRef([]).current;
  
    useEffect(() => {
      partnerRefs.forEach((ref, index) => {
        gsap.fromTo(ref, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
          trigger: ref
        }});
      });
    }, [partnerRefs]) 
  
    return (
      <div className="partners">
        <div className="plogos">
          <img className="plogo lf" src={lflogo} alt="Life&Fit Logo" ref={el => partnerRefs[0] = el} />
          <img className="plogo careto" src={careto} alt="CareTo Logo" ref={el => partnerRefs[1] = el} />
          <img className="plogo iherb" src={iherb} alt="iHerb Logo" ref={el => partnerRefs[2] = el} />
          <img className="plogo sephora" src={sephora} alt="Sephora Logo" ref={el => partnerRefs[3] = el} />
        </div>
      </div>
    );
  }
  
  export default Partners;