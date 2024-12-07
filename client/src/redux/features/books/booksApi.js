import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBasicUrl from "../../../utils/getBasicUrl";

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBasicUrl()}/api/books}`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("token");
        if (token) {
            Headers.set("authorization", `Bearer ${token}`);
        }
        return Headers;
    },
});

const booksApi = createApi({
    reducerPath: "bookApi",
    baseQuery,
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => "/",
            providesTags: ["Books"],
        }),
    }),
});

export const { useFetchAllBooksQuery } = booksApi;
export default booksApi;
