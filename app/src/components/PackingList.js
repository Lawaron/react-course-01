import { useState } from "react";
import Item from "./Item";
import Actions from "./Actions";

const sort = (items, sortBy) => {
  switch (sortBy) {
    case "description":
      return items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    case "packed":
      return items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    case "quantity":
      return items.slice().sort((a, b) => a.quantity - b.quantity);
    default:
      return items;
  }
};

const PackingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClear,
  onMarkAllAsPacked,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = sort(items, sortBy);
  const itemHandlers = { onDeleteItem, onToggleItem };
  const actionHandlers = { onClear, onMarkAllAsPacked };

  return (
    <div className="list">
      <ul>
        {sortedItems.map(({ id, description, quantity, packed }) => (
          <Item id={id} packed={packed} key={id} {...itemHandlers}>
            {`${quantity} ${description}`}
          </Item>
        ))}
      </ul>
      <Actions
        sortBy={sortBy}
        onSortByChanged={setSortBy}
        {...actionHandlers}
      />
    </div>
  );
};

export default PackingList;
