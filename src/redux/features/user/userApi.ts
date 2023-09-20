// import { api } from '../../api/apiSlice';

// const userApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     // getBooks: builder.query({
//     //   query: () => ({
//     //     url: '/books',
//     //     method: 'GET',
//     //   }),
//     //   providesTags: ['books'],
//     // }),
//     // getSingleBook: builder.query({
//     //   query: (id) => `/books/${id}`,
//     //   providesTags: ['reviews', 'books'],
//     // }),
//     // getReviews: builder.query({
//     //   query: (id) => `/books/reviews/${id}`,
//     //   providesTags: ['reviews'],
//     // }),
//     createNewUserWithEmailAndPassword: builder.mutation({
//       query: ({ data }) => ({
//         url: `/auth`,
//         method: 'POST',
//         body: data,
//         invalidatesTags: ['auth'],
//       }),
//     }),
//   }),
// });

// export const { useCreateNewUserWithEmailAndPasswordMutation } = userApi;
