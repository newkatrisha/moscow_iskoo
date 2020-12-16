import "./App.css";
import { cards } from "./cards";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Schema from "./components/Schema";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        {cards &&
          cards.map((card) => {
            return (
              <Card image={card.image} header={card.header} text={card.text} />
            );
          })}
        <Schema />
        <Footer />
      </div>
    </div>
  );
};

export default App;
