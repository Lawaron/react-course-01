import { pizzaData as pizzas } from "./data";

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

const Menu = () => {
  const hasPizzas = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {hasPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Plese come back later! :)</p>
      )}
    </main>
  );
};

const Pizza = ({ pizza }) => {
  if (pizza.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price + 3}$</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're currently open until {closeHour}:00. Come visit us or order
            online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};
