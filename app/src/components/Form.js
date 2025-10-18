import { useState } from "react";

const options = Array.from({ length: 20 }, (_, i) => i + 1);

const initialItem = {
  description: "",
  quantity: 1,
  packed: false,
  id: null,
};

const FORMATTERS = {
  quantity: (value) => Number(value),
};

const convertValue = (name, value) => {
  const formatter = FORMATTERS[name];
  return formatter ? formatter(value) : value;
};

const Form = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState(initialItem);

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

export default Form;
