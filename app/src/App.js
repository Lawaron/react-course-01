const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];

const Logo = () => <h1>🚀 Far Away 🎒</h1>;

const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your 🛶 trip?</h3>
    </form>
  );
};

const Item = ({ id, description, quantity, packed }) => (
  <li>
    <span style={packed ? { textDecoration: "line-through" } : {}}>
      {`${quantity} ${description}`}
      <button>❌</button>
    </span>
  </li>
);

const PackingList = () => (
  <div className="list">
    <ul>
      {initialItems.map((item) => (
        <Item {...item} />
      ))}
    </ul>
  </div>
);

const Stats = () => (
  <footer className="stats">
    <em>👜 You have X items on your list, and you already packed X (X%)</em>
  </footer>
);

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
