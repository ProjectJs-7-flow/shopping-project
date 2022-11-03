import "./App.css";
import Albina from "./components/albina/Albina";
import Kairat from "./components/kairat/Kairat";
import Kairatalfa from "./components/Kairatalfa";
import Malik from "./components/malik/Malik";
import Nurtilek from "./components/nurtilek/Nurtilek";
import Ramazan from "./components/ramazan/Ramazan";


function App() {
  return (
    <div className="App">
      <Ramazan/>
      <Albina />
      <Kairat />
      <Malik />
      <Nurtilek />
      <Kairatalfa />
    </div>
  );
}

export default App;
