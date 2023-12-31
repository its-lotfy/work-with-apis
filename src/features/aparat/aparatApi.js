import { aparatApi } from "@/config/httpConfig";

// functions name => ap+name =aparat+name
// user methods

export const apgetUserProfileApi = (username) => {
  return aparatApi.get(`profile/username/${username}`);
};

export const apgetProfileCategoriesApi = (username) => {
  return aparatApi.get(`profilecategories/username/${username}`);
};
export const apgetVideoesByProfileCategoryApi = (username, usercat) => {
  return aparatApi.get(
    `videobyprofilecat/usercat/${usercat}/username/${username}`
  );
};

// video methods
export const apgetVideoApi = (hash) => {
  return aparatApi.get(`video/videohash/${hash}`);
};
export const apgetVideosByCategoryApi = (catId) => {
  return aparatApi.get(`categoryVideos/cat/${catId}/perpage/11`);
};
export const apgetUserVideoesApi = (username) => {
  return aparatApi.get(`videoByUser/username/${username}/perpage/10`);
};
export const apgetVideoesBySearchApi = (param) => {
  return aparatApi.get(`videoBySearch/text/${param}/perpage/10`);
};
export const apgetVideoesByTagApi = (paramTag) => {
  return aparatApi.get(`videobytag/text/${paramTag}`);
};
export const apgetAllVideosCategoriesApi = () => {
  return aparatApi.get(`categories`);
};
