import StripeContainer from "./Stripe/StripeContainer";
import serum from "./img/serum.jpg";

function Buy() {
  return (
    <div className="buyserum" id="buy">
      <h2>BUY NOW</h2>
      <div className="serumpay">
        <div className="serumdescr">
          <h3>BeYou serum, 15ml</h3>
          <img className="serumimg" src={serum} alt="Serum bottle" />
        </div>
        <div className="paysection">
          <p className="serumtext">
            Discover BeYou Serum, an ultimate solution for youthful-looking
            skin. Our natural blend deeply moisturizes, brightens, and reduces
            fine lines. Suitable for all skin types, paraben and sulfate-free.
            Try it now and see the difference!
          </p>
          <p className="price">$9.99</p>
          <div className="serumstripe">
            <StripeContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
