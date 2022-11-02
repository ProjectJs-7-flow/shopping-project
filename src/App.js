import "./App.css";
import Albina from "./components/albina/Albina";
import Alisher from "./components/alisher/Alisher";
import Asatbek from "./components/asatbek/Asatbek";
import Content from "./components/content/Content";
import Dastan from "./components/dastan/Dastan";
import Kairat from "./components/kairat/Kairat";
import Kairatalfa from "./components/Kairatalfa";
import Malik from "./components/malik/Malik";
import Nurtilek from "./components/nurtilek/Nurtilek";

function App() {
  return (
    <div className="App">
      <Albina/>
      <Alisher />
      <Asatbek />
      <Dastan />
      <Kairat />
      <Malik />
      <Nurtilek />
      <Kairatalfa />
      <Content/>
    </div>
  );
}

export default App;
