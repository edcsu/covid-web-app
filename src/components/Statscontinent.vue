<template>
  <v-container fluid>
    <v-row>
      <v-col>
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
      <v-col>
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
              <v-icon class="" size="32px">mdi-account-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
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
      <v-col>
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
      <v-col>
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
      <v-col>
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
      <v-col>
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Statscontinent",
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
