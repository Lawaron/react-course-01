const Actions = ({ sortBy, onSortByChanged, onClear, onMarkAllAsPacked }) => (
  <div className="actions">
    <select value={sortBy} onChange={(e) => onSortByChanged(e.target.value)}>
      <option value="input">Sort by Input Order</option>
      <option value="description">Sort by Description</option>
      <option value="packed">Sort by Packed Status</option>
      <option value="quantity">Sort by Quantity</option>
    </select>
    <button onClick={onClear}>Clear List</button>
    <button onClick={onMarkAllAsPacked}>Mark All as Packed</button>
  </div>
);

export default Actions;
