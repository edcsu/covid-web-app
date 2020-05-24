export const baseApiUrl = "https://corona.lmao.ninja/";

export const globalTotals = {
  all: "v2/all",
  yesterday: "yesterday"
};

export const countryTotals = {
  countries: "v2/countries"
};

export const continent = {
  continents: "v2/continents"
};

// JHUCSSE (Data from Johns Hopkins University)
export const johnsHopkins = {
  all: "v2/jhucsse",
  historical: "v2/historical",
  allHistorical: "v2/historical/all",
  lastDays: {
    last30days: 30,
    last35days: 35,
    last40days: 40,
    last45days: 45,
    last50days: 50,
    last60days: 60,
    last70days: 70,
    last80days: 80,
    last90days: 90
  }
};

export const countryObject = {
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  active: 0,
  critical: 0,
  casesPerOneMillion: 0,
  deathsPerOneMillion: 0,
  updated: 0,
  affectedCountries: 0,
  tests: 0,
  testsPerOneMillion: 0
};

export const continentObject = {
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  active: 0,
  critical: 0,
  updated: 0,
  countinent: "",
  countries: 0
};

export const timelineObject = {
  cases: {},
  deaths: {},
  recovered: {}
};

export const defaultCountry = "Uganda";
export const defaultContinent = "Africa";
export const eastAfricaCountries = [
  "Uganda",
  "Kenya",
  "Tanzania",
  "Rwanda",
  "Burundi",
  "South Sudan"
];
