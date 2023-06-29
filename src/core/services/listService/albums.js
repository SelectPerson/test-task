import {NetworkService} from "../networkService";
import {PATH_URLS} from "../constants";

const pathAlbums = new NetworkService({ path: PATH_URLS.albums });

export const getAlbums =  async () => {
  return await pathAlbums.get();
}

export const getAlbumsByUser = async (userId) => {
  return await pathAlbums.get(`?userId=${userId}`);
}