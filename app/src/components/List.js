const List = ({ items, renderItem, className = "list" }) => (
  <ul className={className}>{items?.map(renderItem)}</ul>
);

export default List;
