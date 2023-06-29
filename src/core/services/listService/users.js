import {NetworkService} from "../networkService";
import {PATH_URLS} from "../constants";

const pathUsers = new NetworkService({ path: PATH_URLS.users });

export const getUsers =  async () => {
  return await pathUsers.get();
}
