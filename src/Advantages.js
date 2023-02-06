import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Advantages() {
  const imgRefs = useRef([]).current;

  useEffect(() => {
    imgRefs.forEach((ref, index) => {
      gsap.fromTo(ref, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: ref } });
    });
  }, [imgRefs]);


  return (
    <div className="advantages">
      {[25356, 1200000, 300, 95].map((num, index) => (
        <div className="adv" key={index}>
          <h3 ref={el => imgRefs[index] = el}>{num}</h3>
          <p>{index === 0 ? "Happy customers" : 
              index === 1 ? "Followers" : 
              index === 2 ? "Shops worldwide" : 
              "Positive reviews"}</p>
        </div>
      ))}
    </div>
  );
}

export default Advantages;
