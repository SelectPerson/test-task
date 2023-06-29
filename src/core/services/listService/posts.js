import {NetworkService} from "../networkService";
import {PATH_URLS} from "../constants";

const pathPosts = new NetworkService({ path: PATH_URLS.posts });

export const getPosts =  async () => {
  return await pathPosts.get();
}

export const getPostsByUser = async (userId) => {
  return await pathPosts.get(`?userId=${userId}`);
}