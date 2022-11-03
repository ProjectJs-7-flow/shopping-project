import "./App.css";
import Albina from "./components/albina/Albina";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
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
      <Kairat />
      <Malik />
      <Nurtilek />
      <Kairatalfa />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
