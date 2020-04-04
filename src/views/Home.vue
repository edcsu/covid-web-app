<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h3>Global statistics</h3>
    <Stats />
    <h3>Uganda statistics</h3>
    <Stats />
    <h3>Detailed Uganda statistics</h3>
    <v-row>
      <v-col>
        <DetatiledStats />
      </v-col>
      <v-col>
        <DetatiledStats />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from "@/components/Stats";
import DetatiledStats from "@/components/DetatiledStats";

export default {
  name: "Home",

  components: {
    Stats,
    DetatiledStats
  }
};
</script>
