import axios from "axios";

export async function getContent(baseUrl, route) {
  try {
    const response = await axios.get(`${baseUrl}${route}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpecificContent(baseUrl, route, query) {
  try {
    const response = await axios.get(`${baseUrl}${route}/${query}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
