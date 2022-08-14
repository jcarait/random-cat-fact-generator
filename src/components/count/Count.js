import "./count.css";

export default function Count({ value }) {
  return (
    <div className="count">
      <p className="count-text" data-testid="count">
        {value}
      </p>
      <p className="count-label">
        Number of cat facts refreshed in this session
      </p>
    </div>
  );
}
