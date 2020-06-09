<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="blue lighten-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Total cases
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.cases | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-circle</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="success">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Total recoveries
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.recovered | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="amber">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Total active cases
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.active | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="orange lighten-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Total critical
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.critical | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-alert</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="red lighten-1">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Total deaths
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.deaths | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-remove</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="cyan lighten-4">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Cases today
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.todayCases | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-plus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="red lighten-1">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Deaths today
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.todayDeaths | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-minus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="green lighten-1" min-height="90px">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Recovered today
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.todayRecovered | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <!-- <v-col>
        <v-card outlined class="pink lighten-1">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Total tests
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.tests | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-test-tube</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col> -->
    </v-row>
    <!-- <v-row>
      <v-col v-if="stats.affectedCountries">
        <v-card outlined class="blue-grey lighten-4">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Affected countries
              </v-list-item-title>
              <v-list-item-subtitle
                class="display-1 font-weight-black"
                v-text="stats.affectedCountries"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-map-marker</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
       <v-col>
        <v-card outlined class="blue lighten-4">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Cases Per One Million
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.casesPerOneMillion | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-group</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined class="pink lighten-4">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Tests Per One Million
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ stats.testsPerOneMillion | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-test-tube</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined class="teal lighten-3">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1">
                Last updated
              </v-list-item-title>
              <v-list-item-subtitle
                :class="[
                  'font-weight-black',
                  'headline',
                  {
                    'display-1': $vuetify.breakpoint.smAndUp
                  }
                ]"
              >
                {{ stats.updated | unixToDate }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-clock-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>  -->
    <!-- <v-row>
      <span class="text-muted">
        Last updated {{ stats.updated | unixToDate }}
      </span>
    </v-row> -->
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
        class="font-italic grey--text pt-0"
      >
        <span class="font-weight-light">Last updated: </span>
        <span class="font-weight-bold">{{
          stats.updated | convertToLocalDate
        }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Stats",
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
