import axios from "axios";

export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT";

export const getPosts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
