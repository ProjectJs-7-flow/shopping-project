import "./App.css";
import Aidai from "./components/Aidai/Aidai";
import Albina from "./components/albina/Albina";
import Alisher from "./components/Alisher/Alisher";
import Bekjan from "./components/bekjan/bekjan";
import Header from "./components/header/Header";
import Kairat from "./components/kairat/Kairat";
import Kairatalfa from "./components/Kairatalfa";
import Madina from "./components/madina/Madina";
import Malik from "./components/malik/Malik";
import Nooruz from "./components/nooruz/Nooruz";
import Nuraiym from "./components/Nuraiym/Nuraiym";
import Nurtilek from "./components/nurtilek/Nurtilek";
import Ramazan from "./components/ramazan/Ramazan";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nurtilek />
      <Ramazan />
      <Albina />
      <Kairat />
      <Malik />
      <Kairatalfa />
      <Madina />
      <Aidai />
      <Nuraiym />
      <Bekjan />
      <Nooruz />
      <Alisher/>
    </div>
  );
}

export default App;
