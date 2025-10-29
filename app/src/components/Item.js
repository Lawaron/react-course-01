const Item = ({ id, children, packed, onDeleteItem, onToggleItem }) => (
  <li>
    <input
      type="checkbox"
      value={packed}
      checked={packed}
      onChange={() => {
        onToggleItem(id);
      }}
    />
    <span style={packed ? { textDecoration: "line-through" } : {}}>
      {children}
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </span>
  </li>
);

export default Item;
