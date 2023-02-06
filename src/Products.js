import React, { useRef, useEffect } from "react";
import gsap from "gsap/all";

import cream from "./img/icons/cream.png";
import serum from "./img/icons/serum.png";
import lotion from "./img/icons/lotion.png";
import sunscr from "./img/icons/sunscr.png";
import coconutoil from "./img/icons/coconutoil.png";

const products = [cream, serum, lotion, sunscr, coconutoil];
const productTitles = ["Cream", "Serum", "Lotion", "Sunscreen", "Coconut oil"];

function Product() {
  const productRefs = useRef([]).current;

  useEffect(() => {
    productRefs.forEach((ref, index) => {
      gsap.to(ref, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
        scrollTrigger: {
          trigger: ref,
          start: "top center",
        },
      });
    });
  }, [productRefs]);

  return (
    <div className="products">
      <h2>OUR PRODUCTS</h2>
      <div className="productItems">
        {products.map((product, index) => (
          <div className="productitem" key={product}>
            <img
              className="prodimg"
              ref={(el) => (productRefs[index] = el)}
              src={product}
              alt={`${productTitles[index]} icon`}
              style={{ opacity: 0 }}
            />
            <h3>{productTitles[index]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
