<template>
  <v-app>
    <SideBar :visible="isVisible" />
    <Header @hidesidemenu="hideDrawer" />

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

export default {
  name: "App",

  components: {
    Header,
    Footer,
    SideBar
  },

  data: () => ({
    isVisible: false
  }),

  methods: {
    hideDrawer() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>
