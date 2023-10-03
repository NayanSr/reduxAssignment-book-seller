import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/React";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/allBooks",
    }),
    getOneBook: builder.query({
      query: (id) => `/allBooks/${id}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetOneBookQuery, usePostCommentMutation } =
  api;

// singleProduct: builder.query({
//   query: (id) => `/product/${id}`,
// }),
