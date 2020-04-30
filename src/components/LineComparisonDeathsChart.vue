<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    chartData: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },
      labels: []
    };
  },
  mounted() {
    // console.log(Object.keys(this.chartData[0].timeline.cases));
    this.renderChart(
      {
        labels: Object.keys(this.chartData[0].timeline.deaths),
        datasets: [
          {
            label: "Uganda",
            borderColor: "#42A5F5",
            pointBackgroundColor: "#42A5F5",
            borderWidth: 1,
            pointBorderColor: "#42A5F5",
            backgroundColor: "transparent",
            data: Object.values(this.chartData[0].timeline.deaths)
          },
          {
            label: "Kenya",
            borderColor: "#D32F2F",
            pointBackgroundColor: "#D32F2F",
            borderWidth: 1,
            pointBorderColor: "#D32F2F",
            backgroundColor: "transparent",
            data: Object.values(this.chartData[1].timeline.deaths)
          },
          {
            label: "Tanzania",
            borderColor: "#34688F",
            pointBackgroundColor: "#34688F",
            borderWidth: 1,
            pointBorderColor: "#34688F",
            backgroundColor: "transparent",
            data: Object.values(this.chartData[2].timeline.deaths)
          },
          {
            label: "Rwanda",
            borderColor: "#43A047",
            pointBackgroundColor: "#43A047",
            borderWidth: 1,
            pointBorderColor: "#43A047",
            backgroundColor: "transparent",
            data: Object.values(this.chartData[3].timeline.deaths)
          },
          {
            label: "Burundi",
            borderColor: "#FF6F00",
            pointBackgroundColor: "#FF6F00",
            borderWidth: 1,
            pointBorderColor: "#FF6F00",
            backgroundColor: "transparent",
            data: Object.values(this.chartData[4].timeline.deaths)
          },
          {
            label: "South Sudan",
            borderColor: "#8085E9",
            pointBackgroundColor: "#8085E9",
            borderWidth: 1,
            pointBorderColor: "#8085E9",
            backgroundColor: "transparent",
            data: Object.values(this.chartData[5].timeline.deaths)
          }
        ]
      },
      this.options
    );
  }
};
</script>
