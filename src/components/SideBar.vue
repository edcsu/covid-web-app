<template>
  <v-navigation-drawer :mini-variant.sync="drawer" permanent clipped app>
    <v-list dense nav>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link :to="{ name: 'home' }">
            <v-list-item-title>Dashboard</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  data: () => ({
    right: null
  }),
  computed: {
    drawer: function() {
      return this.visible;
    }
  }
};
</script>
