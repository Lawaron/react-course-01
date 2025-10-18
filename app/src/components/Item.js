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
      checked={packed}
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

export default Item;
