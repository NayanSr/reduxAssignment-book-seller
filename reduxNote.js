/* 
const reduxNote = () => {
  return (
    <div>
      
    </div>
  );
};

export default reduxNote; 
*/

//? Use store as attribute in main.jsx

/* 
// store from local & Provider from react-redux
<React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
 */

//? create a store.js file in redux folder
/* 
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../------/counterSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer             //! 'cart' is the name in 'cartSlice', import cartReducer from ./....../cartSlice
  },
});

 */

//? create a counterSlice.js file in redux>featurs>counter folder (all functionality here)
/* 
import {createSlice} from '@reduxjs/toolkit';
const initialState={
  count:0
}
const counterSlice= createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{     //? accepts two parameter state alwes payload if require value for action
      state.count ++;
    },
    decrement:(state)=>{     //? accepts two parameter state alwes payload if require value for action
      state.count -- ;
    },
    incrementByValue:(state, action)=>{
      state.count += action.payload    //? action.payload is the input value from where it calles
    }
  }
});

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer;   //? this will use in store.jsx

 */

//! cartSlice.jsx
/*
const initialState= {
  products:[],
  total:0
}

const cartSlice= createSlice({          createSlice from toolkit
  name:cart
  initialState,
  reducers:{

    addToCart: (state, action) =>{                       addToCart: (state, action:PayloadAction<IProduct>) =>{
        const exists= state.products.find(pd=> pd._id === action.payload._id) ;
        if(exists){
          exists.quantity= exists.quantity + 1;                    only increment quantity no push / exists.quantity= exists.quantity! + 1;(! for non null assertion ie. sure that it is nor null or undefined)
        }else{
          state.products.push({...action.payload, quantity:1})        push an object with all property of clicked product with addition of a new property 'quantity :1'
        }
        state.total= state.total + action.payload.price;
    }
    removeFromCart:(state,action)=>{
      const restProducts = state.products.filter(pd=>pd._id !== action.payload._id);
      state.products= restProducts';
      state.total = state.totla - action.payload.price * action.payload.qyantity!;
    }
    removeOneFromCart : (state, action)=> {
      const targetProductInProducts= state.products.find(pd=>pd._id === action.payload._id);
      if(targetProductInProducts.quantity>1){
        targetProductInProducts.quantity = targetProductInProducts.quantity - 1;
      } else{
        state.products = state.products.filter(pd=> pd._id !== action.payload._id)
      }
      state.total= state.total - action.payload.price;
    }

  }
})

export const {addToCart, removeFromCart} = cartSlice.actiions;

export default cartSlice.reducer;
*/

// ? use these functions
/* 
import { useDispatch, useSelector } from "react-redux"; >replace optional> import (useAppDispatch, useAppSelector) from local hook file
import { increment,incrementByValue } from "./src/Redux/stateSlice";

const Counter = () => {
const {count}= useSelector(state=>state.counter); >replacr optional> useAppSelector((state))  //? count from initialState, counter is name in slice 
const dispatch=useDispatch() >replace optional> const dispatch=useAppDispatch()
return(
<button onClick={()=>dispatch(increment())}>increment</button>
<h4>{count}</h4>
<button onClick={()=>dispatch(incremByValue(5))}>increment</button>

)

}
 */

//! ProductCart.jsx (rsc) (use action from slice in single product component)
/* 
ProductCart=({product})=>{            product is the props from parent component

  const dispatch= useAppDispatch()           useDipatch import from '@/redux/hook'
  
  const handleAddProduct=(product)=>{
      dispatch(addToCart(product))               addToCart from cartSlice.jsx
  }

  return(
    <>
    ....
    .........
    <button onClick={()=> handleAddProduct(product)}> Add to cart </button>
    <>
  )
}
*/

//! Cart.jsx  (use state data & action from cartSlice)
/* 
const {products}= useAppSelector(state=>state.cart)       //! useAppSelector import from '@/redux/hook', products is the all added product from state in cartSlice
const dispatch = useAppDispatch()                          from '@/redux/hook'

<button onClick={()=>dispatch(removeFromCart())}> delect </button>     removeFromCart() from cartSlice.jsx 

*/

/*
01(main). a. keep everything inside Provider from react redux,
          b. use a store attribute of this Provider, value is store from local file,

02(store). a. create a store.jsx file
           b. in store inside reducer{} use defaultly exported(counterSlice.reducer) function from slice file

03(slice). a. all function is declared in similarnameSlice.jsx file,
           b. default export only reducers as nameSlice.reducer,
           c. export functions (eg-export const {increment, decrement} = counterSlice.actions)

04(use). a. call initialState value field (eg- const {count}= useSelector(state=>state.counter) counter is name & count is stave value)
         b. use a react-redux hook useDispatch (eg- const dispatch=useDispatch()),
         ab. useDispatch and useSelector can replaced by UseAppDispatch & useAppSelector then 'state=>state.count' can be replaced by only 'state'
         c. use an action inside dispatch()using arrow function (eg- <button onClick={()=>dispatch(increment())}>increment</button>)
         d. increment should be import from slice file


*/

//! main.jsx
/*
<Provider store={store}>                             from react-redux, store from local
     <RouterProvider router={router} />             
</Provider>


*/

//! store.jsx
/*
const store= configureStore({
reducer:{
  cart: cartReducer             'cart' is the name in 'cartSlice', import cartReducer from ./....../cartSlice

}
  
})
*/

//! cartSlice.jsx
/*
const initialState= {
  products:[],
  total:0
}

const cartSlice= createSlice({          createSlice from toolkit
  name:cart
  initialState,
  reducers:{
    addToCart: (state, action) =>{                       addToCart: (state, action:PayloadAction<IProduct>) =>{
        const exists= state.products.find(pd=> pd._id === action.payload._id) ;
        if(exists){
          exists.quantity= exists.quantity + 1;                    only increment quantity no push / exists.quantity= exists.quantity! + 1;(! for non null assertion ie. sure that it is nor null or undefined)
        }else{
          state.products.push({...action.payload, quantity:1})        push an object with all property of clicked product with addition of a new property 'quantity :1'
        }
        state.total= state.total + action.payload.price;
    }
    removeFromCart:(state,action)=>{
      const restProducts = state.products.filter(pd=>pd._id !== action.payload._id);
      state.products= restProducts';
      state.total = state.totla - action.payload.price * action.payload.qyantity!;
    }
    removeOneFromCart : (state, action)=> {
      const targetProductInProducts= state.products.find(pd=>pd._id === action.payload._id);
      if(targetProductInProducts.quantity>1){
        targetProductInProducts.quantity = targetProductInProducts.quantity - 1;
      } else{
        state.products = state.products.filter(pd=> pd._id !== action.payload._id)
      }
      state.total= state.total - action.payload.price;
    }

  }
})

export const {addToCart, removeFromCart} = cartSlice.actiions;

export default cartSlice.reducer;
*/

//! ProductCart.jsx (rsc)             use action from slice in single product component
/* 
ProductCart=({product})=>{            product is the props from parent component

  const dispatch= useAppDispatch()           useDipatch import from '@/redux/hook'
  
  const handleAddProduct=(product)=>{
      dispatch(addToCart(product))               addToCart from cartSlice.jsx
  }

  return(
    <>
    ....
    .........
    <button onClick={()=> handleAddProduct(product)}> Add to cart </button>
    <>
  )
}
*/

//! Cart.jsx
/* 
const {products}= useAppSelector(state=>state.cart)        useAppSelector import from '@/redux/hook', products is the all added product from state in cartSlice
const dispatch = useAppDispatch()                          from '@/redux/hook'

<button onClick={()=>dispatch(removeFromCart())}> delect </button>     removeFromCart() from cartSlice.jsx 

*/

//! ************************ ----------RTK Query----------- *************************
//? Creating hooks to load data from an api in replace of using useEffect or loader

//!(declaration) redux > api > apiSlice.js >> (RTK Query Overview> create an api slice) video-21_7,8,10

/*

export const api= createApi({           createApi from @reduxjs/toolkit/query/react
reducerPath:'api',
  baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),   fetchBaseQuery from @reduxjs/toolkit/query/react
  endpoints: (builder)=>({
    
    getBooks: builder.query({    //! getting all books
      query:()=> '/allBooks',            //! usages > query in documentation
    }),

    getSingleBook: builder.query({    //! getting one book using id   V_10
      query:(id)=> `/allBooks/${id}`,            //! this link related with server url  V_10
    }),

    postComment:builder.mutation({     //! posting a new comment in current book using id.... Video-22_1&2
      query:({id,data})=>({
        url:`/comment/${id}`,           //! this url should be matched with server post api
        method:'POST',
        body: data,
      })

  }),
});

export const {useGetBooksQuery, useGetSingleBookQuery, usePostCommentMutation} = api;

*/

//! modification in store.jsx       video-21_8
/*
import { configureStore } from "@reduxjs/toolkit";
import stateReducers from "./stateSlice";
import { api } from "./api/apiSlice";                             //! new

export const store = configureStore({
  reducer: {
    counter: stateReducers,
    [api.reducerPath]: api.reducer,                               //! new
  },
  middleware: (                                                   //! new
    getDefaultMiddleware                                          //! new
  ) => getDefaultMiddleware().concat(api.middleware),             //! new
});
*/

//!(use to fetch all books in AllBooks.jsx)  video21_9

/* 
  const { data: books, isLoading } = useGetBooksQuery();       all books will receive inside data 

*/

//! use singleBook information in details page
/* 
const params = useParams()         from r-r-d
const id= params.id;
const {data: singleBook, isLoading, error}= useSingleBookQuery(id);          use singleBook as one book data 
 */

//! use usePostCommentMutation in Details.jsx     Video-22_1&2
/* 
const { id } = useParams();

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
 */

//! server
/*
// ? get all books
app.get("/allBooks", async (req, res) => {
  const cursor = booksCollection.find();
  const result = await cursor.toArray();
  res.send(result);
});

//? get one book
app.get("/allBooks/:id", async (req, res) => {
  const { id } = req.params;
  const query = { _id: new ObjectId(id) };
  console.log(query);
   
  // const options = {
  //   projection: {
  //     title: 1,
  //     author: 1,
  //     genre: 1,
  //     publicationYear: 1,
  //     img: 1,
  //   },
  // };
  
  // const result = await booksCollection.findOne(query, options);
  const result = await booksCollection.findOne(query);
  console.log(result);
  res.send(result);
});

//? post a book
app.post("/allBooks", async (req, res) => {
  const book = req.body;
  const result = await booksCollection.insertOne(book);
  res.send(result);
});

//? post a comment          Video-22_1&2
app.post("/comment/:id", async (req, res) => {
  const productId = req.params.id;
  const comment = req.body.reviews;
  console.log(productId, comment);

  const result = await booksCollection.updateOne(
    { _id: new ObjectId(productId) },
    { $push: { reviews: comment } }
  );
  console.log(result);

  if (result.modifiedCount !== 1) {
    console.error("Product not found or comment not added");
    res.json({ error: "Product not found or comment not added" });
    return;
  }

  console.log("Comment added successfully");
  res.json({ message: "Comment added successfully" });
});
*/

//! ************************ ----------Async Thunk(firebase-authentication)----------- *************************

//? Redux> user> userSlice.js    Video_05

//! ******************** others ***********************
//! should be note :
//? 01. loader to load data from Router.jsx
//? 02. context api
//? 03. dynamic routing to find clicked item data (useParams(), /:id..... etc)

//! get one book

//? server
/* 
  app.get("/allBooks/:id", async (req, res) => {
   const { id } = req.params;
   const query = { _id: new ObjectId(id) };
   console.log(query);
    
  // const options = {
  //   projection: {
  //     title: 1,
  //     author: 1,
  //     genre: 1,
  //     publicationYear: 1,
  //     img: 1,
  //   },
  // };
  
   // const result = await booksCollection.findOne(query, options);
   const result = await booksCollection.findOne(query);
   console.log(result);
   res.send(result);
  })

 */

//? ui singleBookDetails.jsx
/* 
  const { _id, title, author, genre, publicationYear, img, price } = props.book;

  <Link to={`/allBooks/${_id}`}>details</Link>
   */

//!  Loader in Routes.js
/* 
  {
    path: "/allBooks/:id",
    element: <Details />,
     loader: () => fetch("/books.json"),
  },
 */
//? usage
// const books = useLoaderData();
