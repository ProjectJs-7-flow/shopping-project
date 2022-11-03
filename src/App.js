import "./App.css";
import Albina from "./components/albina/Albina";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Kairat from "./components/kairat/Kairat";
import Kairatalfa from "./components/Kairatalfa";
import Malik from "./components/malik/Malik";
import Nurtilek from "./components/nurtilek/Nurtilek";


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
      <TodoWithRoma />
      <Footer />
    </div>
  );
}

export default App;
