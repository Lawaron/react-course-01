const List = ({ className, items, renderItem }) => (
  <ul className={className}>{items?.map((item) => renderItem(item))}</ul>
);

export default List;
