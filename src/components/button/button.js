export default function button({ label, onClick }) {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  );
}
