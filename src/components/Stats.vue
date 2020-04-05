<template>
  <v-row>
    <v-col>
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Total cases
            </v-list-item-title>
            <v-list-item-subtitle v-text="stats.cases"> </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Total recoveries
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="stats.recovered"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-image</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Total active cases
            </v-list-item-title>
            <v-list-item-subtitle v-text="stats.active"> </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-image</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Total deaths
            </v-list-item-title>
            <v-list-item-subtitle v-text="stats.deaths"> </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-image</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Cases Today
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="stats.todayCases"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-image</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Deaths Today
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="stats.todayDeaths"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-image</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col v-if="stats.affectedCountries">
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Affected Countries
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="stats.affectedCountries"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-image</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col>
      <v-card outlined>
        <v-list-item two-line="">
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              Last Updated
            </v-list-item-title>
            <v-list-item-subtitle v-text="stats.updated"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile>
            <v-icon>mdi-image</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["summaryDetails"],
  data: () => ({
    right: null
  }),
  computed: {
    stats: function() {
      return this.summaryDetails;
    }
  }
};
</script>
