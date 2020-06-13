import axios from "axios";
import { countryObject } from "./apiHelpers";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

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

/**
 * formattoLocalDate
 * @description Takes in a date value and returns a local time version
 */
export function formattoLocalDate(updated) {
  if (updated) {
    return new Date(updated).toLocaleString();
  }
}

function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${minutes}`;
  }

  if (prefomattedDate) {
    // Today at 10:20
    // Yesterday at 10:20
    return `${prefomattedDate} at ${hours}:${minutes}`;
  }

  if (hideYear) {
    // 10. January at 10:20
    return `${day}. ${month} at ${hours}:${minutes}`;
  }

  // 10. January 2017. at 10:20
  return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
}

export function timeAgo(dateParam) {
  if (!dateParam) {
    return null;
  }

  const date = typeof dateParam === "object" ? dateParam : new Date(dateParam);
  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) {
    return "now";
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return "about a minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, "Today"); // Today at 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, "Yesterday"); // Yesterday at 10:20
  } else if (isThisYear) {
    return getFormattedDate(date, false, true); // 10. January at 10:20
  }

  return getFormattedDate(date); // 10. January 2017. at 10:20
}
