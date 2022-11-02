import "./App.css";
import Albina from "./components/albina/Albina";
import Alisher from "./components/alisher/Alisher";
import Asatbek from "./components/asatbek/Asatbek";
import Dastan from "./components/dastan/Dastan";
import Header from "./components/header/Header";
import Kairat from "./components/kairat/Kairat";
import Kairatalfa from "./components/Kairatalfa";
import Malik from "./components/malik/Malik";
import Nurtilek from "./components/nurtilek/Nurtilek";
import Ramazan from "./components/ramazan/Ramazan";

function App() {
  return (
    <div className="App">
      <Header />
      <Ramazan />
      <Albina />
      <Alisher />
      <Asatbek />
      <Dastan />
      <Kairat />
      <Malik />
      <Nurtilek />
      <Kairatalfa />
    </div>
  );
}

export default App;
