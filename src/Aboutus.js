import waterser from "./img/waterser.jpg";
import drops from "./img/icons/drops.png";

function Aboutus() {
return (
<div className="aboutus" id="about">
<div className="abouttext">
<h2>ABOUT US</h2>
<p>
BeYou Serum offers natural, effective serums for youthful-looking
skin. Our formulas target specific skin concerns and made with only
natural ingredients. Hypoallergenic, cruelty-free, and easily absorbed
by the skin. Achieve healthy and refreshed skin with our serums. No
harsh chemicals or synthetic fragrances. Trust BeYou for natural,
effective skincare.
</p>
<a href="#buy">
<button className="buybtn">Buy now</button>
</a>
</div>
<div className="waterblock">
<img className="waterser" src={waterser} alt="Water droplets on skin serum bottle" />
<img className="drops" src={drops} alt="Water droplets icon" />
</div>
</div>
);
}

export default Aboutus;