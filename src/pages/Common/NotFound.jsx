import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ height: "80vh" }}>
      <h4>Page url is invalide</h4>
      <Link
        to="/"
        style={{
          marginBottom: "20px",
          padding: "5px 10px",
          backgroundColor: "teal",
          color: "gold",
          fontWeight: "8px",
        }}
      >
        HOME PAGE
      </Link>
    </div>
  );
}
