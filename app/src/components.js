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

  const { photoName, name, ingredients, price } = pizza;

  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price + 3}$</span>
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
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

const Order = ({ openHour, closeHour }) => (
  <div className="order">
    <p>
      We're currently open from {openHour}:00 until {closeHour}:00. Come visit
      us or order online!
    </p>
    <button className="btn">Order</button>
  </div>
);
