import {
  apgetAllVideosCategoriesApi,
  apgetUserProfileApi,
  apgetUserVideoesApi,
  apgetVideoApi,
  apgetVideoesBySearchApi,
  apgetVideoesByTagApi,
  apgetVideosByCategoryApi,
} from "@/API";
import { apiSlice } from "@/API/apiSlice";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

//
export const extendedAparatSlice = apiSlice.injectEndpoints({
  endpoints: (bulider) => ({
    get: bulider.query({
      query: () => "/video",
    }),
  }),
});
// RTK query
const result = extendedAparatSlice.endpoints.get.select();

export const allvideos = createSelector(
  result,
  (results) => results?.data ?? []
);

// athync thunk
const SearchMethods = {
  tag: "tag",
  category: "cat",
  name: "name",
  all: "all",
};

export const apGetProfile = createAsyncThunk(
  "aparat/fetchUserInfo",
  async (username, thunk) => {
    try {
      const { profile } = (await apgetUserProfileApi(username)).data;

      return profile;
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const apSearch = createAsyncThunk(
  "aparat/Search",
  async (method, thunk) => {
    let results = [];
    try {
      switch (method.kind) {
        case SearchMethods.tag:
          {
            const { videobytag } = (await apgetVideoesByTagApi(method.title))
              .data;
            results = videobytag;
          }
          break;
        case SearchMethods.category:
          {
            const { categoryvideos } = (
              await apgetVideosByCategoryApi(method.title)
            ).data;
            results = categoryvideos;
          }
          break;
        case SearchMethods.name:
          results = (await apgetUserVideoesApi(method.title)).data;
          break;
        case SearchMethods.all:
          {
            const { videobysearch } = (
              await apgetVideoesBySearchApi(method.title)
            ).data;
            results = videobysearch;
          }

          break;

        default:
          break;
      }
      return results;
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
export const apGetVideo = createAsyncThunk(
  "aparat/GetVideo",
  async (info, thunk) => {
    try {
      const { video } = (await apgetVideoApi(info)).data;
      return video;
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
export const apGetuserVideoes = createAsyncThunk(
  "aparat/GetuserVideoes",
  async (info, thunk) => {
    try {
      const video = (await apgetUserVideoesApi(info)).data;

      return video;
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
export const apGetVideoesByTag = createAsyncThunk(
  "aparat/GetVideoesByTag",
  async (tag, thunk) => {
    try {
      const { videobytag } = (await apgetVideoesByTagApi(tag)).data;

      return videobytag ?? [];
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

export const apGetAllCategories = createAsyncThunk(
  "aparat/GetAllCategories",
  async (cat, thunk) => {
    try {
      const { categories } = (await apgetAllVideosCategoriesApi()).data;

      return categories ?? [];
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
export const apGetVideoesByCategory = createAsyncThunk(
  "aparat/GetVideoesByCategory",
  async (cat, thunk) => {
    try {
      const { categoryvideos } = (await apgetVideosByCategoryApi(cat)).data;

      return categoryvideos ?? [];
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
export const apGetVideoesBySearch = createAsyncThunk(
  "aparat/GetVideoesBySearch",
  async (param, thunk) => {
    try {
      const { videobysearch } = (await apgetVideoesBySearchApi(param)).data;

      return videobysearch ?? [];
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);
export const apGetRelatedVideoes = createAsyncThunk(
  "aparat/GetRelatedVideoes",
  async (param, thunk) => {
    try {
      let allRelatedVideoes = [];
      const { videobysearch } = (await apgetVideoesBySearchApi(param.title))
        .data;
      allRelatedVideoes.push(...videobysearch);
      const { categoryvideos } = (await apgetVideosByCategoryApi(param.cat))
        .data;
      allRelatedVideoes.push(...categoryvideos);
      if (param.tag) {
        const { videobytag } = (
          await apgetVideoesByTagApi(param.tag.split("-")[0])
        ).data;
        allRelatedVideoes.push(...videobytag);
      }

      return allRelatedVideoes ?? [];
    } catch (error) {
      if (!error.response) throw error;
      return thunk.rejectWithValue(error.response.data);
    }
  }
);

const aparatSlice = createSlice({
  name: "aparatData",
  initialState: {
    profile: {},
    search: [],
    videoCategories: [],
    video: {
      info: {},
      relatedVideo: [],
    },
  },
  reducers: {
    clearVideo: (state, action) => {
      state.video = new Object({
        info: {},
        relatedVideo: new Array(),
      });
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(apGetVideoesByCategory.fulfilled, (state, action) => {
        state.video.relatedVideo = action.payload;
      })
      // .addCase(apGetVideoesBySearch.fulfilled, (state, action) => {
      //   state.video.relatedVideo = action.payload;
      // })

      .addCase(apSearch.fulfilled, (state, action) => {
        state.search = action.payload;
      })
      .addCase(apGetRelatedVideoes.fulfilled, (state, action) => {
        state.video.relatedVideo = action.payload;
      })
      .addCase(apGetAllCategories.fulfilled, (state, action) => {
        state.videoCategories = action.payload;
      })

      .addCase(apGetProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })

      .addCase(apGetVideo.fulfilled, (state, action) => {
        state.video.info = action.payload;
      });
  },
});

export const selectVideo1 = (state) => state.aparat.video;
export const selectVideo = createSelector(selectVideo1, (video) => video);
export const { clearVideo } = aparatSlice.actions;
export default aparatSlice.reducer;
export const { useGetQuery } = extendedAparatSlice;
