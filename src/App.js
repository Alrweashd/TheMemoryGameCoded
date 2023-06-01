import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import cards from "./data/cards";
import Card from "./components/Card";
import Intro from "./components/Intro";
import CardsList from "./components/CardsList";
function App() {
  return (
    <>
      <Intro />
      <div className="container">
        <CardsList />
      </div>
    </>
  );
}

export default App;
