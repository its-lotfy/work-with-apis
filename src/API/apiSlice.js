import { baseAparatApi } from "@/config/httpConfig";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "aparatApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseAparatApi }),
  tagTypes: ["VIDEO"],
  endpoints: (builder) => ({
    getVideo: builder.query({
      query: (uid) => `video/videohash/${uid}`,
    }),
    getVideos: builder.query({
      query: () => `categoryVideos/cat/${"catId"}/perpage/11`,
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery } = apiSlice;
