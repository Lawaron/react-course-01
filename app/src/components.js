// import { pizzaData } from "./data";

export const App = () => (
  <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>
);

const Header = () => (
  <header className="header">
    <h1>Fast React Pizza Co.</h1>
  </header>
);

const Menu = () => (
  <main className="menu">
    <h2>Our menu</h2>
    <Pizza
      name="Pizza Spinaci"
      ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      photoName="pizzas/focaccia.jpg"
      price={12}
    />
  </main>
);

const Pizza = ({ name, ingredients, photoName, price }) => (
  <div className="pizza">
    <img src={photoName} alt={name} />
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price + 3}$</span>
    </div>
  </div>
);

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = openHour <= hour && hour <= closeHour;
  // console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We're currently open!
    </footer>
  );
};
