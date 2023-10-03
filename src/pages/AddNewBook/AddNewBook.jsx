import "./AddNewBook.css";

const AddNewBook = () => {
  return (
    <div style={{ height: "80vh" }}>
      <form className="edit-book-form">
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
          <label htmlFor="publicationDate">Publication Date</label>
          <input type="text" name="publicationDate" id="" />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input type="text" name="image" id="" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="" />
        </div>
        <input className="button-submit" type="submit" value="Add this book" />
      </form>
    </div>
  );
};

export default AddNewBook;
