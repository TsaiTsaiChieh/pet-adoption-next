import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const petApi = createApi({
  reducerPath: "PetApi",
  // Redundant trailing slash is added when using root endpoint
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getPetByFilter: builder.query<PetDataType[], PetFilterType>({
      query: ({ kind }) => {
        const baseUrl = process.env.NEXT_PUBLIC_API;
        let url = `${baseUrl}&$top=18&$skip=0`;
        if (kind) url += `&${kind}`;
        return { url, method: "GET" };
      },
    }),
  }),
});

export const { useGetPetByFilterQuery } = petApi;
