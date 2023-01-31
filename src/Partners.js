import lflogo from "./img/partners/lflogo.png";
import careto from "./img/partners/careto.png";
import iherb from "./img/partners/iherb.png";
import sephora from "./img/partners/sephora.png";

function Partners() {
return (
<div className="partners">
<div className="plogos">
<img className="plogo lf" src={lflogo} alt="Life&Fit Logo" />
<img className="plogo careto" src={careto} alt="CareTo Logo" />
<img className="plogo iherb" src={iherb} alt="iHerb Logo" />
<img className="plogo sephora" src={sephora} alt="Sephora Logo" />
</div>
</div>
);
}

export default Partners;