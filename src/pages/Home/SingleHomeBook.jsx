import "./SingleHomeBook.css";

export default function SingleHomeBook(props) {
  const { img, title, genre, publicationYear, price } = props.book;

  return (
    <div className="single-book-container">
      <img src={img} alt="" />
      <div className="home-book-detail">
        {title}
        <p>Genre: {genre}</p>
        <p>Publication Year: {publicationYear}</p>
        <p>
          Price: <span className="price">$ {price}</span>
        </p>
        <button className="reading-list">Reading List</button>
      </div>
    </div>
  );
}
