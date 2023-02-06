import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import natural from "./img/icons/natural.png";
import hyp from "./img/icons/hyp.png";
import crufree from "./img/icons/crufree.png";

function Whyus() {
  const iconRefs = useRef([]).current;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    iconRefs.forEach((ref, index) => {
      gsap.to(
        ref,
        {
          y: -10,
          repeat: 1,
          yoyo: true,
          duration: 1,
          ease: "bounce",
          scrollTrigger: {
            trigger: ref,
            start: "top center",
            toggleActions: "restart pause resume",
            markers: false,
          },
        }
      );
    });
  }, [iconRefs]);

  return (
    <div className="whyUs">
      <div className="contentWhy">
        <h2 className="headtwo">Why BeYou?</h2>
        <p>
          Serum is especially suitable for moisturizing because it is composed
          of smaller molecules that can penetrate deep into the skin and deliver
          a very high concentration of active ingredients. This makes them a
          great tool for tackling specific skin care concerns such as wrinkles.
          Goodbye signs of aging!
        </p>

        <div className="Whyitems">
          <div className="whyitem">
            <img
              className="icon"
              ref={(el) => (iconRefs[0] = el)}
              src={natural}
              alt="natural icon"
            />
            <h3>Natural</h3>
            <p>Serum exclusively from natural ingredients.</p>
          </div>

          <div className="whyitem">
            <img
              className="icon"
              ref={(el) => (iconRefs[1] = el)}
              src={hyp}
              alt="hyp icon"
            />
            <h3>Hypoallergenic</h3>
            <p>Suitable for all skin types and does not cause allergies.</p>
          </div>
          <div className="whyitem">
            <img
              className="icon"
              ref={(el) => (iconRefs[2] = el)}
              src={crufree}
              alt="curfree icon"
            />
            <h3>Cruelty free</h3>
            <p>The product was developed without any tests on animals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
