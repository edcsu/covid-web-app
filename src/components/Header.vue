<template>
  <v-app-bar app clipped-left color="primary" dark>
    <!-- <v-app-bar-nav-icon @click="$emit('hidesidemenu')"></v-app-bar-nav-icon> -->
    <v-icon class="svg-icon" v-text="'$vuetify.icons.virus'"></v-icon>
    <div class="ml-1 d-flex align-center">
      COVID19 APP
    </div>

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://twitter.com/skeith696"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon" v-text="'$vuetify.icons.linkedin'"></v-icon>
        </v-btn>
      </template>
      <span>
        Connect on LinkedIn
        <v-icon class="">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://twitter.com/skeith696"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon" v-text="'$vuetify.icons.twitter'"></v-icon>
        </v-btn>
      </template>
      <span>
        Follow on twitter
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
