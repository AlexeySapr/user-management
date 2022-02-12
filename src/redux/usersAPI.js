import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62040ccdc6d8b20017dc33e6.mockapi.io/api/v1',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: result =>
        result ? result.map(({ id }) => ({ type: 'Users', id })) : ['Users'],
    }),

    addUser: builder.mutation({
      query: newUser => ({
        url: `/users`,
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),

    updateUser: builder.mutation({
      query: ({ updateUserID, ...putData }) => ({
        url: `/users/${updateUserID}`,
        method: 'PUT',
        body: putData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Users', id }],
    }),

    deleteUser: builder.mutation({
      query: userID => ({
        url: `/users/${userID}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
