import axios from "axios";
import { constant } from "./ApiConstants";
import { storageContainsToken, getTokenFromStorage } from "./ApiUtils";

// Resusable requests template
export const ApiRequest = () => {
  const config = { baseURL: constant.baseUrl };
  const instance = axios.create(config);
  return instance;
};

export const ApiRequestWithToken = () => {
  const config = { baseURL: constant.baseUrl };
  if (storageContainsToken()) {
    const token = getTokenFromStorage();
    config.headers = { Authorization: `Bearer ${token}` };
  }
  const instance = axios.create(config);
  return instance;
};

export const csApiRequestWithToken = () => {
  const config = { baseURL: constant.csbaseUrl };
  if (storageContainsToken()) {
    const token = getTokenFromStorage();
    config.headers = { Authorization: `Bearer ${token}`, channel: `web` };
  }
  const instance = axios.create(config);
  return instance;
};
export const smApiRequestWithToken = () => {
  const config = { baseURL: constant.smbaseUrl };
  if (storageContainsToken()) {
    const token = getTokenFromStorage();
    config.headers = { Authorization: `Bearer ${token}`, channel: `web` };
  }
  const instance = axios.create(config);
  return instance;
};
// End of reusable template requests

export const login = (formData) => {
  return ApiRequest().post("/user/login", formData);
};

// movies

export const getCurrentlyLogged = () => {
  return ApiRequestWithToken().get("/user/current");
};

export const getMovies = () => {
  return ApiRequestWithToken().get("/movies?pageNumber=1&pageSize=10");
};
export const getMoviesTopTen = () => {
  return ApiRequestWithToken().get(
    // `movies/groupings/topten?categoryId=${categoryId}`
    "/movies/groupings/topten?categoryId=&movieType"
  );
};

//challenges
export const getChallenges = () => {
  return ApiRequestWithToken().get("/challenge-groups");
};

//stories
export const getStory = () => {
  return ApiRequestWithToken().get("/stories");
};

//hashtags
export const getHashTags = () => {
  return ApiRequestWithToken().get("/hashtags?pageNumber=1&pageSize=100&name");
};

//enteries
export const getEntries = () => {
  return ApiRequestWithToken().get("/entries?pageSize=10");
};

//enteries
export const getComments = () => {
  return ApiRequestWithToken().get(
    "/entry-comments?pageNumber=1&pageSize=10&entryId=&entryId=5fbe41512acc12138c00def3}"
  );
};

//getallUsers
export const getAllUsers = () => {
  return ApiRequestWithToken().get("/user/allusers");
};

//  postEntryPosts
export const createPostAction = (data) => {
  return ApiRequestWithToken().post("/entry-data", data);
};

//  postEntryPosts
export const deletePostAction = (data) => {
  return ApiRequestWithToken().delete("/entry-data", { data });
};

//  isfollow
export const followUser = (data) => {
  return ApiRequestWithToken().post("/user-data", data);
};

//  unfollow
export const unfollowUser = (data) => {
  return ApiRequestWithToken().delete("/user-data", { data });
};

// deals of the day
export const GetDayDealProducts = () => {
  return csApiRequestWithToken().get("/products/popular?type=top");
};

// featured categories clicknshop

export const featuredCategories = () => {
  return csApiRequestWithToken().get("/categories/root");
};

export const walletBalance = (cuid) => {
  return smApiRequestWithToken().get(`/bank/accountBalance?customerId=${cuid}`);
};
