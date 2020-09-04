<template>
  <v-footer app class="primary">
    <v-card-text
      :class="[
        'white--text',
        'd-flex',
        'justify-space-between',
        {
          'flex-column': $vuetify.breakpoint.xs
        }
      ]"
    >
      <span class>
        <strong>#STAYHOME</strong>
      </span>
      <span class>
        <strong>#WEARMASKINPUBLIC</strong>
      </span>
      <span>
        View
        <a
          href="https://covid19globaltracker.web.app"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          COVID19 vaccine tracker
        </a>
      </span>
      <span>
        Data from
        <a
          href="https://disease.sh/docs"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          NOVELCoVID19 API
        </a>
      </span>
    </v-card-text>
  </v-footer>
</template>
