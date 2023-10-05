import "./AllBooks.css";
import SingleBookDetail from "./singleBookDetail";
import { useGetBooksQuery } from "../../Redux/api/apiSlice";

const AllBooks = () => {
  // const books = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { data: books, isLoading } = useGetBooksQuery();
  // console.log(isLoading);

  return (
    <div className="allbooks-container">
      {books?.map((book) => (
        <SingleBookDetail key={book._id} book={book}></SingleBookDetail>
      ))}
    </div>
  );
};

export default AllBooks;

/* 
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Redux/stateSlice";

export function AllBooks() {
  

  return (
    <div>
      
    </div>
  );
}
 */
/* 
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/stateSlice";

const AllBooks = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{ height: "90vh" }}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
 */
