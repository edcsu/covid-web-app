<template>
  <v-app-bar app clipped-left color="primary" dark>
    <!-- <v-app-bar-nav-icon @click="$emit('hidesidemenu')"></v-app-bar-nav-icon> -->
    <div class="ml-1 d-flex align-center">
      COVID19 APP
    </div>

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://github.com/edcsu/covid-web-app"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon" v-text="'$vuetify.icons.github'"></v-icon>
        </v-btn>
      </template>
      <span>
        See on github
        <v-icon class="">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",

  data: () => ({
    //
  })
};
</script>
