import Header from "./components/Header/Header";
import css from "./styles/app.module.scss";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";

import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary  ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
