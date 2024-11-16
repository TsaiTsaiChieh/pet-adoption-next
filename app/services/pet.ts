import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const petApi = createApi({
  reducerPath: "PetApi",
  // Redundant trailing slash is added when using root endpoint
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getPetByFilter: builder.query<PetDataType[], PetFilterType>({
      query: ({ page, kind, age, sex, area, shelter, bodyType }) => {
        const baseUrl = process.env.NEXT_PUBLIC_API;
        const offset = 18;
        let url = `${baseUrl}&$top=18&$skip=${(page - 1) * offset}`;
        if (kind) url += `&animal_kind=${kind}`;
        if (age) url += `&animal_age=${age}`;
        if (sex) url += `&animal_sex=${sex}`;
        if (area) url += `&animal_area_pkid=${area}`;
        if (shelter) url += `&animal_shelter_pkid=${shelter}`;
        if (bodyType) url += `&animal_bodytype=${bodyType}`;
        return { url, method: "GET" };
      },
    }),
  }),
});

export const { useGetPetByFilterQuery } = petApi;
