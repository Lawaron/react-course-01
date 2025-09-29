import { pizzaData } from "./data";

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
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </ul>
    {/* <Pizza
      name="Pizza Spinaci"
      ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      photoName="pizzas/focaccia.jpg"
      price={12}
    /> */}
  </main>
);

const Pizza = ({ pizza }) => (
  <li className="pizza">
    <img src={pizza.photoName} alt={pizza.name} />
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.price + 3}$</span>
    </div>
  </li>
);

const Footer = () => {
  // const hour = new Date().getHours();
  // const openHour = 11;
  // const closeHour = 22;
  // const isOpen = openHour <= hour && hour <= closeHour;
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We're currently open!
    </footer>
  );
};
