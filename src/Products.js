import cream from "./img/icons/cream.png";
import serum from "./img/icons/serum.png";
import lotion from "./img/icons/lotion.png";
import sunscr from "./img/icons/sunscr.png";
import coconutoil from "./img/icons/coconutoil.png";

function Product() {
return (
<div className="products">
<h2>OUR PRODUCTS</h2>
<div className="productItems">
<div className="productitem">
<img className="prodimg" src={cream} alt="cream icon"/>
<h3>Cream</h3>
</div>
<div className="productitem">
<img className="prodimg" src={serum} alt="serum icon"/>
<h3>Serum</h3>
</div>
<div className="productitem">
<img className="prodimg" src={lotion} alt="lotion icon"/>
<h3>Lotion</h3>
</div>
<div className="productitem">
<img className="prodimg" src={sunscr} alt="sunscreen icon"/>
<h3>Sunscreen</h3>
</div>
<div className="productitem">
<img className="prodimg" src={coconutoil} alt="coconut oil icon"/>
<h3>Coconut oil</h3>
</div>
</div>
</div>
);
}

export default Product;