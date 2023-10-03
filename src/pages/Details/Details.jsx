import {
  useGetOneBookQuery,
  usePostCommentMutation,
} from "../../Redux/api/apiSlice";
import "./Details.css";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const user = { email: "n@gc.c" };
  const { id } = useParams();

  // const books = useLoaderData();
  // const cb = books.find((book) => book.id == id);
  const { data: book, error } = useGetOneBookQuery(id);
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();
  console.log(isLoading, isError, isSuccess);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.comment.value;
    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    postComment(options);
    console.log(options);
  };

  console.log(book?.reviews, isLoading, error);
  return (
    <div className="details-container">
      <div className="product-overview">
        <div className="product-description">
          <p>title:{book?.title}</p>
          <p>{book?.genre}</p>
          <p>Published on {book?.publicationYear}</p>
        </div>
        <img src={book?.img} alt="" />
      </div>
      {user?.email && (
        <div className="conditional-button">
          <Link to="/edit">
            <button>Edit</button>
          </Link>
          <button style={{ color: "red" }}>Delete</button>
        </div>
      )}
      <hr />
      <div>
        <h4>User Reviews</h4>
        {book?.reviews?.map((review, index) => (
          <p key={index}>{review}</p>
        ))}
        <form onSubmit={handleOnSubmit} className="rewiew-form">
          <input
            className="field"
            placeholder="Add a comment"
            type="text"
            name="comment"
          />

          <input className="submit" type="submit" value="Upload" />
        </form>
      </div>
    </div>
  );
};

export default Details;
