<template>
  <v-container>
    <h3>Detailed Uganda statistics</h3>
    <v-row>
      <v-col>
        <DetatiledStats />
      </v-col>
      <v-col>
        <DetatiledStats />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetatiledStats from "@/components/DetatiledStats";

export default {
  name: "Details",
  components: {
    DetatiledStats
  },
  data: () => ({
    //
  })
};
</script>
