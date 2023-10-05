import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/React";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    //! get all book
    getBooks: builder.query({
      query: () => "/allBooks",
    }),

    //!get one book
    getOneBook: builder.query({
      query: (id) => `/allBooks/${id}`,
    }),

    //! Add book
    insertOneBook: builder.mutation({
      query: (data) => ({
        url: `/allBooks`,
        method: "POST",
        body: data,
      }),
    }),

    //! post a comment
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
    }),

    //! Delete a book
    deleteOne: builder.mutation({
      query: (id) => ({
        url: `/allBooks/${id}`,
        method: "DELETE",
        // body: data,
      }),
    }),
    //! Update a Book
    update: builder.mutation({
      query: ({ id, data }) => ({
        url: `/allBooks/${id}`,
        method: "put",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetOneBookQuery,
  useDeleteOneMutation,
  usePostCommentMutation,
  useInsertOneBookMutation,
  useUpdateMutation,
} = api;

// singleProduct: builder.query({
//   query: (id) => `/product/${id}`,
// }),
