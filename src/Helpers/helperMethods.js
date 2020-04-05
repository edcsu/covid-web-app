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

export function convertUnixTime(timestamp) {
  // convert unix timestamp to milliseconds
//   const timestamp_ms = timestamp * 1000;

  // initialize new Date object
  const date_ob = new Date(timestamp);

  // year as 4 digitimestamp (YYYY)
  const year = date_ob.getFullYear();

  // month as 2 digitimestamp (MM)
  const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // date as 2 digitimestamp (DD)
  const date = ("0" + date_ob.getDate()).slice(-2);

  // hours as 2 digitimestamp (hh)
  const hours = ("0" + date_ob.getHours()).slice(-2);

  // minutes as 2 digitimestamp (mm)
  const minutes = ("0" + date_ob.getMinutes()).slice(-2);

  // seconds as 2 digitimestamp (ss)
  const seconds = ("0" + date_ob.getSeconds()).slice(-2);
  // date & time as YYYY-MM-DD hh:mm:ss format:
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}
