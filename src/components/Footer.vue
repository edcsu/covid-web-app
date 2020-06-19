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
        Visit
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          WHO
        </a>
        and
        <a
          href="https://coronavirus.jhu.edu/map.html"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          John hopkins University
        </a>
        for more info.
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
