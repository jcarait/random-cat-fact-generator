import "./count.css";

export default function Count({ value }) {
  return (
    <div className="count" data-testid="count">
      <p>{value}</p>
    </div>
  );
}
