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
    <Statscontinent :summaryDetails="continentSummary" />
    <h3>East Africa statistics</h3>
    <Stats :summaryDetails="eastAfricaSummary" />
    <h3>Uganda statistics</h3>
    <Stats :summaryDetails="defaultSummary" />
    <h3>Uganda Timeline</h3>
    <LineChart :chartData="countryTimeline" v-if="loaded"></LineChart>
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from "@/components/Stats";
import LineChart from "@/components/LineChart";
import Statscontinent from "@/components/Statscontinent";
import {
  getContent,
  getSpecificContent,
  populateData
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
    Statscontinent,
    LineChart
  },

  created() {
    this.getEastAfricaDetails();
    this.getGlobalDetails();
    this.getDefaultDetails();
    this.getContinentDetails();
    this.getCountryTimeline();
  },

  mounted() {
    setInterval(() => {
      this.getEastAfricaDetails();
      this.getGlobalDetails();
      this.getDefaultDetails();
      this.getContinentDetails();
      this.getCountryTimeline();
    }, this.timeInterval);
  },

  data: () => ({
    globalSummary: countryObject,
    defaultSummary: countryObject,
    eastAfricaSummary: countryObject,
    continentSummary: continentObject,
    countryTimeline: timelineObject,
    timeInterval: 600000,
    loaded: false
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
        const response = await getSpecificContent(
          baseApiUrl,
          johnsHopkins.historical,
          defaultCountry,
          johnsHopkins.lastDays.lastdays
        );
        this.loaded = true;
        this.countryTimeline = response.data.timeline;
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
