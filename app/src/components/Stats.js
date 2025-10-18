const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = numItems ? Math.round((numPacked / numItems) * 100) : 0;

  const messages = {
    empty: "👜 Your packing list is empty. Start adding some items! 👜",
    ready: "🎉 You are ready to go! 🎉",
    inProgress: `👜 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentPacked}%)`,
  };

  const getMessage = () => {
    if (numItems === 0) return messages.empty;
    if (percentPacked === 100) return messages.ready;
    return messages.inProgress;
  };

  return (
    <footer className="stats">
      <em>{getMessage()}</em>
    </footer>
  );
};

export default Stats;
