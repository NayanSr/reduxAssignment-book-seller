import { useSelector } from "react-redux";
import {
  useDeleteOneMutation,
  useGetOneBookQuery,
  usePostCommentMutation,
} from "../../Redux/api/apiSlice";
import "./Details.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  // console.log(user.email);

  const { id } = useParams();

  const { data: book, error } = useGetOneBookQuery(id);
  const isMyBook = user.email === book?.email;

  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();

  // console.log(isMyBook, book, isLoading, isError, isSuccess);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.comment.value;
    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    postComment(options);
    // console.log(options);
  };

  const [deleteOne] = useDeleteOneMutation();
  const handleDeleteThisBook = (id) => {
    const confirmed = confirm("Sure to delete !!");
    if (confirmed) {
      deleteOne(id);
    }
    navigate("/allBooks");
    window.location.reload();
  };

  // console.log(book?.reviews, isLoading, error);
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
      {isMyBook && (
        <div className="conditional-button">
          <Link to={`/updateBook/${id}`}>
            <button>Edit</button>
          </Link>
          <button
            style={{ color: "red" }}
            onClick={() => handleDeleteThisBook(id)}
          >
            Delete
          </button>
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
