import axios from "axios";
import { countryObject } from "./apiHelpers";

export async function getContent(baseUrl, route) {
  try {
    const response = await axios.get(`${baseUrl}${route}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getSpecificContent(baseUrl, route, query, lastdays) {
  try {
    const response = await axios.get(`${baseUrl}${route}/${query}`, {
      params: {
        lastdays: lastdays
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
export async function getTimelineContent(baseUrl, route, query, lastdays) {
  try {
    const response = await axios.get(
      `${baseUrl}${route}/${query}?lastdays=${lastdays}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export function convertUnixTime(timestamp) {
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

export function populateData(array) {
  let newData = { ...countryObject };
  array.forEach(element => {
    newData.cases += element.cases;
    newData.todayCases += element.todayCases;
    newData.deaths += element.deaths;
    newData.todayDeaths += element.todayDeaths;
    newData.recovered += element.recovered;
    newData.active += element.active;
    newData.critical += element.critical;
    newData.casesPerOneMillion += element.casesPerOneMillion;
    newData.deathsPerOneMillion += element.deathsPerOneMillion;
    newData.updated = element.updated;
    newData.tests += element.tests;
    newData.testsPerOneMillion += element.testsPerOneMillion;
  });
  return newData;
}
