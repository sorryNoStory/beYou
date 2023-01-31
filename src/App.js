import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Advantages from "./Advantages";
import Nav from "./Nav";
import MainTex from "./MainText";
import Whyus from "./Whyus";
import Aboutus from "./Aboutus";
import Product from "./Products";
import Partners from "./Partners";
import ReviewsSlider from "./ReviewsSlider";
import Buy from "./Buy";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="mainScreen">
        <Nav />
        <MainTex />
      </div>
      <Advantages />
      <Whyus />
      <Product />
      <Aboutus />
      <ReviewsSlider />
      <Partners />
      <Buy />
      <Footer />
    </div>
  );
}

export default App;
