export const baseApiUrl = "https://disease.sh/v3/covid-19/";

export const appUrl = "https://floating-headland-29129.herokuapp.com/";

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
    last350days: 350,
    last380days: 380,
    last400days: 400,
    last420days: 420,
    last450days: 450,
    last500days: 500
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
