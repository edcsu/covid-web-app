<template>
  <div class="home">
    <v-row>
      <v-col>
        <v-btn color="secondary" dark @click="refreshAll">
          <v-icon class="mr-2">mdi-update</v-icon>
          Refresh Data
        </v-btn>
      </v-col>
    </v-row>
    <h3>Global statistics</h3>
    <Stats :summaryDetails="globalSummary" />
    <h3>Africa statistics</h3>
    <StatsContinent :summaryDetails="continentSummary" />
    <h3>East Africa statistics</h3>
    <Stats :summaryDetails="eastAfricaSummary" />
    <h3>Uganda statistics</h3>
    <Stats :summaryDetails="defaultSummary" />
    <h3>Uganda Timeline</h3>
    <LineChart class="mb-2" :chartData="countryTimeline" v-if="loaded">
    </LineChart>
    <v-skeleton-loader
      v-if="!loaded"
      class="mx-auto"
      min-width="300"
      type="image"
    ></v-skeleton-loader>
    <h3>East Africa Total Cases Timeline</h3>
    <LineComparisonCasesChart
      class="mb-2"
      :chartData="eaTimeline"
      v-if="eaLoaded"
    >
    </LineComparisonCasesChart>
    <v-skeleton-loader
      v-if="!eaLoaded"
      class="mx-auto"
      min-width="300"
      type="image"
    ></v-skeleton-loader>
    <h3>East Africa Total Recovered Timeline</h3>
    <LineComparisonRecoveredChart
      class="mb-2"
      :chartData="eaTimeline"
      v-if="eaLoaded"
    >
    </LineComparisonRecoveredChart>
    <v-skeleton-loader
      v-if="!eaLoaded"
      class="mx-auto"
      min-width="300"
      type="image"
    ></v-skeleton-loader>
    <h3>East Africa Total Deaths Timeline</h3>
    <v-skeleton-loader
      v-if="!eaLoaded"
      class="mx-auto"
      min-width="300"
      type="image"
    ></v-skeleton-loader>
    <LineComparisonDeathsChart
      class="show-bottom"
      :chartData="eaTimeline"
      v-if="eaLoaded"
    >
    </LineComparisonDeathsChart>
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from "@/components/Stats";
import LineChart from "@/components/LineChart";
import LineComparisonCasesChart from "@/components/LineComparisonCasesChart";
import LineComparisonRecoveredChart from "@/components/LineComparisonRecoveredChart";
import LineComparisonDeathsChart from "@/components/LineComparisonDeathsChart";
import StatsContinent from "@/components/Statscontinent";
import {
  getContent,
  getSpecificContent,
  populateData,
  getTimelineContent
} from "@/Helpers/helperMethods";
import {
  baseApiUrl,
  globalTotals,
  countryObject,
  defaultCountry,
  countryTotals,
  continent,
  continentObject,
  defaultContinent,
  johnsHopkins,
  timelineObject,
  eastAfricaCountries
} from "@/Helpers/apiHelpers";

export default {
  name: "Home",

  components: {
    Stats,
    StatsContinent,
    LineChart,
    LineComparisonCasesChart,
    LineComparisonRecoveredChart,
    LineComparisonDeathsChart
  },

  created() {
    this.getEastAfricaDetails();
    this.getGlobalDetails();
    this.getDefaultDetails();
    this.getContinentDetails();
    this.getCountryTimeline();
    this.getEATimeline();
  },

  mounted() {
    setInterval(() => {
      this.getEastAfricaDetails();
      this.getGlobalDetails();
      this.getDefaultDetails();
      this.getContinentDetails();
      this.getCountryTimeline();
      this.getEATimeline();
    }, this.timeInterval);
  },

  data: () => ({
    globalSummary: countryObject,
    defaultSummary: countryObject,
    eastAfricaSummary: countryObject,
    continentSummary: continentObject,
    countryTimeline: timelineObject,
    eaTimeline: [],
    timeInterval: 600000,
    loaded: false,
    eaLoaded: false
  }),

  methods: {
    async getGlobalDetails() {
      try {
        const response = await getContent(baseApiUrl, globalTotals.all);
        this.globalSummary = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getDefaultDetails() {
      try {
        const response = await getSpecificContent(
          baseApiUrl,
          countryTotals.countries,
          defaultCountry
        );
        this.defaultSummary = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getEastAfricaDetails() {
      try {
        const response = await getSpecificContent(
          baseApiUrl,
          countryTotals.countries,
          eastAfricaCountries.join()
        );
        this.eastAfricaSummary = populateData(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getContinentDetails() {
      try {
        const response = await getSpecificContent(
          baseApiUrl,
          continent.continents,
          defaultContinent
        );
        this.continentSummary = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getCountryTimeline() {
      this.loaded = false;
      try {
        const response = await getTimelineContent(
          baseApiUrl,
          johnsHopkins.historical,
          defaultCountry,
          johnsHopkins.lastDays.last60days
        );
        this.loaded = true;
        this.countryTimeline = response.data.timeline;
      } catch (error) {
        console.error(error);
      }
    },
    async getEATimeline() {
      this.eaLoaded = false;
      try {
        const response = await getTimelineContent(
          baseApiUrl,
          johnsHopkins.historical,
          eastAfricaCountries.join(),
          johnsHopkins.lastDays.last60days
        );
        this.eaLoaded = true;
        this.eaTimeline = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    refreshAll() {
      this.getGlobalDetails();
      this.getDefaultDetails();
      this.getContinentDetails();
      this.getCountryTimeline();
    }
  }
};
</script>
