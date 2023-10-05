import { useNavigate, useParams } from "react-router-dom";
import {
  useGetOneBookQuery,
  useUpdateMutation,
} from "../../Redux/api/apiSlice";
import "./UpdateBook.css";

const UpdateBook = () => {
  const { id } = useParams();
  const [update, { isLoading, isError, isSuccess }] = useUpdateMutation();

  const { data: book, error } = useGetOneBookQuery(id);
  const navigate = useNavigate();
  const handleBookUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    // const author = form.author.value;
    const genre = form.grnre.value;
    const publicationYear = form.publicationYear.value;
    const img = form.image.value;
    const email = form.email.value;
    const price = form.price.value;
    // const comment = form.comment.value;
    const data = {
      title,
      // author: [author],
      genre,
      publicationYear,
      img,
      email,
      price,
      /*  reviews: [comment], */
    };
    // console.log(id, data);
    update({ id, data });
    navigate("/allBooks");
    window.location.reload();
  };
  return (
    <div>
      <form onSubmit={handleBookUpdate} className="edit-book-form">
        <div>
          <label htmlFor="title">Book Title</label>
          <input type="text" name="title" id="" defaultValue={book?.title} />
        </div>

        {/* <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="" defaultValue={book?.author} />
        </div> */}

        <div>
          <label htmlFor="grnre">Genre</label>
          <input type="text" name="grnre" id="" defaultValue={book?.genre} />
        </div>
        <div>
          <label htmlFor="publicationYear"> Publication Year</label>
          <input
            type="text"
            name="publicationYear"
            id=""
            defaultValue={book?.publicationYear}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input type="text" name="image" id="" defaultValue={book?.img} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="" defaultValue={book?.email} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="" defaultValue={book?.price} />
        </div>
        {/* <div>
          <label htmlFor="comment">comments</label>
          <input
            type="text"
            name="comment"
            id=""
            defaultValue={[book?.reviews]}
          />
        </div> */}
        <input className="button-submit" type="submit" value="Update book" />
      </form>
    </div>
  );
};

export default UpdateBook;
