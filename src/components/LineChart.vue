<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
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
    this.renderChart(
      {
        labels: Object.keys(this.chartData.cases),
        datasets: [
          {
            label: "cases",
            borderColor: "#42A5F5",
            pointBackgroundColor: "#42A5F5",
            borderWidth: 1,
            pointBorderColor: "#42A5F5",
            backgroundColor: "transparent",
            data: Object.values(this.chartData.cases)
          },
          {
            label: "deaths",
            borderColor: "#D32F2F",
            pointBackgroundColor: "#D32F2F",
            borderWidth: 1,
            pointBorderColor: "#D32F2F",
            backgroundColor: "transparent",
            data: Object.values(this.chartData.deaths)
          },
          {
            label: "recovered",
            borderColor: "#43A047",
            pointBackgroundColor: "#43A047",
            borderWidth: 1,
            pointBorderColor: "#43A047",
            backgroundColor: "transparent",
            data: Object.values(this.chartData.recovered)
          }
        ]
      },
      this.options
    );
  }
};
</script>
