<template>
  <div class="home">
    <v-row>
      <v-col class="mt-6">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn color="secondary" dark @click="refreshAll" v-on="on">
              <v-icon class="mr-2">mdi-update</v-icon>
              Refresh Data
            </v-btn>
          </template>
          <span>
            Click to refresh now
            <v-icon color="white">mdi-hand-pointing-up</v-icon>
          </span>
        </v-tooltip>
      </v-col>
      <v-col class="text-right mr-4">
        <GenQrCode />
      </v-col>
    </v-row>
    <h3>Global statistics</h3>
    <Stats :summaryDetails="globalSummary" v-if="globalLoaded" />
    <StatsSkeleton v-else />
    <h3>Africa statistics</h3>
    <StatsContinent :summaryDetails="continentSummary" v-if="continentLoaded" />
    <StatsSkeleton v-else />
    <h3>East Africa statistics</h3>
    <Stats :summaryDetails="eastAfricaSummary" v-if="eaSummaryLoaded" />
    <StatsSkeleton v-else />
    <h3>Uganda statistics</h3>
    <Stats :summaryDetails="defaultSummary" v-if="defaultLoaded" />
    <StatsSkeleton v-else />
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
    <ChartSkeleton v-if="!eaLoaded" />
    <h3>East Africa Total Recovered Timeline</h3>
    <LineComparisonRecoveredChart
      class="mb-2"
      :chartData="eaTimeline"
      v-if="eaLoaded"
    >
    </LineComparisonRecoveredChart>
    <ChartSkeleton v-if="!eaLoaded" />
    <h3>East Africa Total Deaths Timeline</h3>
    <ChartSkeleton v-if="!eaLoaded" />
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
import GenQrCode from "@/components/GenQrCode";
import LineComparisonDeathsChart from "@/components/LineComparisonDeathsChart";
import StatsContinent from "@/components/Statscontinent";
import StatsSkeleton from "@/components/StatsSkeleton";
import ChartSkeleton from "@/components/ChartSkeleton";
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
    LineComparisonDeathsChart,
    StatsSkeleton,
    ChartSkeleton,
    GenQrCode
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
    eaLoaded: false,
    globalLoaded: false,
    eaSummaryLoaded: false,
    defaultLoaded: false,
    continentLoaded: false
  }),

  methods: {
    async getGlobalDetails() {
      this.globalLoaded = false;
      try {
        const response = await getContent(baseApiUrl, globalTotals.all);
        this.globalSummary = response.data;
        this.globalLoaded = true;
      } catch (error) {
        this.globalLoaded = false;
        console.error(error);
      }
    },
    async getDefaultDetails() {
      this.defaultLoaded = false;
      try {
        const response = await getSpecificContent(
          baseApiUrl,
          countryTotals.countries,
          defaultCountry
        );
        this.defaultSummary = response.data;
        this.defaultLoaded = true;
      } catch (error) {
        console.error(error);
        this.defaultLoaded = false;
      }
    },
    async getEastAfricaDetails() {
      this.eaSummaryLoaded = false;
      try {
        const response = await getSpecificContent(
          baseApiUrl,
          countryTotals.countries,
          eastAfricaCountries.join()
        );
        this.eastAfricaSummary = populateData(response.data);
        this.eaSummaryLoaded = true;
      } catch (error) {
        console.error(error);
        this.eaSummaryLoaded = false;
      }
    },
    async getContinentDetails() {
      this.continentLoaded = false;
      try {
        const response = await getSpecificContent(
          baseApiUrl,
          continent.continents,
          defaultContinent
        );
        this.continentSummary = response.data;
        this.continentLoaded = true;
      } catch (error) {
        console.error(error);
        this.continentLoaded = false;
      }
    },
    async getCountryTimeline() {
      this.loaded = false;
      try {
        const response = await getTimelineContent(
          baseApiUrl,
          johnsHopkins.historical,
          defaultCountry,
          johnsHopkins.lastDays.last220days
        );
        this.loaded = true;
        this.countryTimeline = response.data.timeline;
      } catch (error) {
        console.error(error);
        this.loaded = false;
      }
    },
    async getEATimeline() {
      this.eaLoaded = false;
      try {
        const response = await getTimelineContent(
          baseApiUrl,
          johnsHopkins.historical,
          eastAfricaCountries.join(),
          johnsHopkins.lastDays.last220days
        );
        this.eaLoaded = true;
        this.eaTimeline = response.data;
      } catch (error) {
        console.error(error);
        this.eaLoaded = false;
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
