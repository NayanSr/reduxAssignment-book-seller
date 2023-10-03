/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SingleBookDetail.css";

const SingleBookDetail = (props) => {
  //! eslint-disable-next-line react/prop-types
  const { _id, title, author, genre, publicationYear, img, price } = props.book;

  return (
    <div style={{ border: "2px solid gold", borderRadius: "10px" }}>
      <div className="singlebook-container">
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{genre}</p>
        {/* ???????????????? */}
        {author.map((at, index) => (
          <p key={index}>{at}</p>
        ))}
        <p>{publicationYear}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="details-button">
        <Link to={`/allBooks/${_id}`}>details</Link>
      </div>
    </div>
  );
};

export default SingleBookDetail;
