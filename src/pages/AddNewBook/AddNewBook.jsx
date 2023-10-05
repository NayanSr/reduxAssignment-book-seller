import { useSelector } from "react-redux";
import { useInsertOneBookMutation } from "../../Redux/api/apiSlice";
import "./AddNewBook.css";

const AddNewBook = () => {
  const [insertOneBook, { isLoading, isError, isSuccess }] =
    useInsertOneBookMutation();
  const { user } = useSelector((state) => state.user);

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.grnre.value;
    const publicationYear = form.publicationYear.value;
    const img = form.image.value;
    const email = form.email.value;
    const price = form.price.value;
    const comment = form.comment.value;
    const data = {
      title,
      author: [author],
      genre,
      publicationYear,
      img,
      email,
      price,
      reviews: [comment],
    };
    insertOneBook(data, isLoading, isError, isSuccess);
  };

  return (
    <div style={{ height: "80vh" }}>
      <form onSubmit={handleAddBook} className="edit-book-form">
        <div>
          <label htmlFor="title">Book Title</label>
          <input type="text" name="title" id="" />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="" />
        </div>

        <div>
          <label htmlFor="grnre">Genre</label>
          <input type="text" name="grnre" id="" />
        </div>
        <div>
          <label htmlFor="publicationYear"> Publication Year</label>
          <input type="text" name="publicationYear" id="" />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input type="text" name="image" id="" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="" defaultValue={user.email} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="" />
        </div>
        <div>
          <label htmlFor="comment">comments</label>
          <input type="text" name="comment" id="" />
        </div>
        <input className="button-submit" type="submit" value="Add this book" />
      </form>
    </div>
  );
};

export default AddNewBook;
