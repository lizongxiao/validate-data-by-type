// request.js
import { axiosRequest } from "./axiosRequest";
import { fetchRequest } from "./fetchRequest";

export const REQUEST_MODES = {
  AXIOS: "axios",
  FETCH: "fetch",
};

export const request = async (
  url: string,
  options = {},
  mode = REQUEST_MODES.AXIOS
) => {
  switch (mode) {
    case REQUEST_MODES.AXIOS:
      return await axiosRequest(url, options);
    case REQUEST_MODES.FETCH:
      return await fetchRequest(url, options);
    default:
      throw new Error("Invalid request mode");
  }
};
