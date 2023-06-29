import axios from 'axios'
import {BASE_API_URL} from "./constants";

export class NetworkService {
  constructor({ baseUrl = BASE_API_URL, path }) {
    this.baseUrl = baseUrl;
    this.path = path;
  }

  async get(query) {
    try {
      let url = `${this.baseUrl}/${this.path}`;
      if(query) url = `${this.baseUrl}/${this.path}${query}`;

      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      return err;
    }
  }
}