const List = ({ items, renderItem }) => (
  <ul className="list">{items?.map(renderItem)}</ul>
);

export default List;
