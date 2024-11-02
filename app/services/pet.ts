import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const petApi = createApi({
  reducerPath: "PetApi",
  // Redundant trailing slash is added when using root endpoint
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getPetByFilter: builder.query<PetDataType[], PetFilterType>({
      query: ({ page, area, kind, shelter }) => {
        const baseUrl = process.env.NEXT_PUBLIC_API;
        const offset = 18;
        let url = `${baseUrl}&$top=18&$skip=${(page - 1) * offset}`;
        if (kind) url += `&animal_kind=${kind}`;
        if (area) url += `&animal_area_pkid=${area}`;
        if (shelter) url += `&animal_shelter_pkid=${shelter}`;
        return { url, method: "GET" };
      },
    }),
  }),
});

export const { useGetPetByFilterQuery } = petApi;
