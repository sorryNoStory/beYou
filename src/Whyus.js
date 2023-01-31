import natural from "./img/icons/natural.png";
import hyp from "./img/icons/hyp.png";
import crufree from "./img/icons/crufree.png";
function Whyus() {
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
            <img className="icon" src={natural} alt="natural icon" />
            <h3>Natural</h3>
            <p>Serum exclusively from natural ingredients.</p>
          </div>

          <div className="whyitem">
            <img className="icon" src={hyp} alt="hyp icon"  />
            <h3>Hypoallergenic</h3>
            <p>Suitable for all skin types and does not cause allergies.</p>
          </div>
          <div className="whyitem">
            <img className="icon" src={crufree} alt="curfree icon"  />
            <h3>Cruelty free</h3>
            <p>The product was developed without any tests on animals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
