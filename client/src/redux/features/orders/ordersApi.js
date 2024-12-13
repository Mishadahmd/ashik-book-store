import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBasicUrl from "../../../utils/getBasicUrl";

const ordersApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBasicUrl()}/api/orders`,
        credentials: "include",
    }),
    tagTypes: ["Orders"],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
                credentials: "include",
            }),
            invalidatesTags: ["Orders"],
        }),
        getOrderByEmail: builder.query({
            query: (email) => ({
                url: `/email/${email}`,
                method: "GET",
            }),
            providesTags: ["Orders"],
        }),
    }),
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;
export default ordersApi;
