import { useState } from "react";

const Logo = () => <h1>🚀 Far Away 🎒</h1>;

const Form = ({ onAddItems }) => {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);
  const initialItem = {
    description: "",
    quantity: 1,
    packed: false,
    id: null,
  };

  const [newItem, setNewItem] = useState(initialItem);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: name === "quantity" ? Number(value) : value,
      id: prevItem.id || Date.now(),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newItem.description) return;

    onAddItems(newItem);

    setNewItem(initialItem);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🛶 trip?</h3>
      <select name="quantity" value={newItem.quantity} onChange={handleChange}>
        {options.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="description"
        value={newItem.description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

const Item = ({ description, quantity, packed }) => (
  <li>
    <span style={packed ? { textDecoration: "line-through" } : {}}>
      {`${quantity} ${description}`}
      <button>❌</button>
    </span>
  </li>
);

const PackingList = ({ items }) => (
  <div className="list">
    <ul>
      {items.map((item) => (
        <Item {...item} key={item.id} />
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
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 2, packed: true },
  ]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

export default App;
