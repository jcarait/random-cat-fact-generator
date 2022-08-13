import "./card.css";

export default function Card({ data }) {
  if (data) {
    return (
      <div className="card" data-testid="card">
        <p>{data}</p>
      </div>
    );
  }
}
