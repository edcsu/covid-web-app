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
    <h3>Uganda statistics</h3>
    <Stats :summaryDetails="defaultSummary" />
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from "@/components/Stats";
import Statscontinent from "@/components/Statscontinent";
import { getContent, getSpecificContent } from "@/Helpers/helperMethods";
import {
  baseApiUrl,
  globalTotals,
  countryObject,
  defaultCountry,
  countryTotals,
  continent,
  continentObject,
  defaultContinent
} from "@/Helpers/apiHelpers";

export default {
  name: "Home",

  components: {
    Stats,
    Statscontinent
  },

  created() {
    this.getGlobalDetails();
    this.getDefaultDetails();
    this.getContinentDetails();
  },

  mounted() {
    setInterval(() => {
      this.getGlobalDetails();
      this.getDefaultDetails();
      this.getContinentDetails();
    }, this.timeInterval);
  },

  data: () => ({
    globalSummary: countryObject,
    defaultSummary: countryObject,
    continentSummary: continentObject,
    timeInterval: 600000
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
    refreshAll() {
      this.getGlobalDetails();
      this.getDefaultDetails();
      this.getContinentDetails();
    }
  }
};
</script>
