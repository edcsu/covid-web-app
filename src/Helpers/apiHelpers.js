export const baseApiUrl = "https://disease.sh/v2/";

export const globalTotals = {
  all: "all",
  yesterday: "yesterday"
};

export const countryTotals = {
  countries: "countries"
};

export const continent = {
  continents: "continents"
};

// JHUCSSE (Data from Johns Hopkins University)
export const johnsHopkins = {
  all: "jhucsse",
  historical: "historical",
  allHistorical: "historical/all",
  lastDays: {
    last30days: 30,
    last35days: 35,
    last40days: 40,
    last45days: 45,
    last50days: 50,
    last60days: 60,
    last70days: 70,
    last80days: 80,
    last90days: 90,
    last100days: 100
  }
};

export const countryObject = {
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  todayRecovered: 0,
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
