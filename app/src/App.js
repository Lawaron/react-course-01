import { useState } from "react";

const Logo = () => <h1>🚀 Far Away 🎒</h1>;

const Form = ({ onAddItem }) => {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);
  const initialItem = {
    description: "",
    quantity: 1,
    packed: false,
    id: null,
  };

  const [newItem, setNewItem] = useState(initialItem);

  const FORMATTERS = {
    quantity: (value) => Number(value),
  };

  const convertValue = (name, value) => {
    const formatter = FORMATTERS[name];
    return formatter ? formatter(value) : value;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: convertValue(name, value),
      id: prevItem.id || Date.now(),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newItem.description) return;

    onAddItem(newItem);

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

const Item = ({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) => (
  <li>
    <input
      type="checkbox"
      value={packed}
      onChange={() => {
        onToggleItem(id);
      }}
    />
    <span style={packed ? { textDecoration: "line-through" } : {}}>
      {`${quantity} ${description}`}
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </span>
  </li>
);

const PackingList = ({ items, onDeleteItem, onToggleItem }) => (
  <div className="list">
    <ul>
      {items.map((item) => (
        <Item
          {...item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </ul>
  </div>
);

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = numItems ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        👜 You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({percentPacked}%)
      </em>
    </footer>
  );
};

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
