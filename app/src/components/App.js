import DateCounter from "./DateCounter";

export default function App() {
  return (
    <div>
      <DateCounter />
      <DateCounter defaultDate="2025. 11. 22." maxStep={20} />
      <DateCounter defaultCount={13} defaultStep={3} />
    </div>
  );
}
