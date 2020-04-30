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
        <strong>#WASHYOURHANDS</strong>
      </span>
      <span>
        Data from
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          WHO
        </a>
        ,
        <a
          href="https://coronavirus.jhu.edu/map.html"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          John hopkins University
        </a>
        and
        <a
          href="https://www.worldometers.info/coronavirus/"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          Worldometer
        </a>
      </span>
    </v-card-text>
  </v-footer>
</template>
