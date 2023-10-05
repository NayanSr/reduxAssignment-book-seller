import { useGetBooksQuery } from "../../Redux/api/apiSlice";
import "./Home.css";
import SingleHomeBook from "./SingleHomeBook";

const Home = () => {
  const { data: books } = useGetBooksQuery();
  const type = "Fantasy";

  const matchedBooks = books?.filter((book) => book.genre == type);
  const matchedTopTen = matchedBooks?.slice(0, 10);

  return (
    <div className="home-container">
      <p>
        Number of top ten {type} book: {matchedTopTen?.length}
      </p>
      <div className="single-book-map">
        {matchedTopTen?.map((book, index) => (
          <SingleHomeBook book={book} key={index}></SingleHomeBook>
        ))}
      </div>
    </div>
  );
};

export default Home;
