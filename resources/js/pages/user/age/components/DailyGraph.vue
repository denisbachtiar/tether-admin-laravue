<template>
    <fragment>
        <span v-if="loaded == false">Loading...</span>
        <Chart :height="220" v-if="loaded" :chartdata="chartdata"/>
    </fragment>
</template>

<script>
import { Line } from 'vue-chartjs'
// Inline Chart Component
const Chart = {
    extends: Line,
    props: {
        chartdata: {
            type: Array,
            default: null
        }
    },
  mounted () {
      this.renderChart(
          {
                labels: this.chartdata.date,
                datasets: [
                    {
                        label: 'Kids',
                        fill: false,
                        lineTension: 0.1,
                        borderColor: '#4586df',
                        data: this.chartdata.kids
                    },
                    {
                        label: 'Adult',
                        fill: false,
                        lineTension: 0.1,
                        borderColor: '#f87979',
                        data: this.chartdata.adult
                    },
                    {
                        label: 'Old',
                        fill: false,
                        lineTension: 0.1,
                        borderColor: '#45c13d',
                        data: this.chartdata.old
                    },
                    {
                        label: 'Elder',
                        fill: false,
                        lineTension: 0.1,
                        borderColor: '#878787',
                        data: this.chartdata.elder
                    }
                ],
            },
            {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        )
  }
}
export default {
   components: {
       Chart
   },
   data: () => ({
       chartdata: null,
       loaded: false
   }),
   mounted () {
       axios
            .get("/api/user/dailygraphage")
            .then(response => {
                this.chartdata = response.data
                // console.log(this.chartdata)
                this.loaded = true
            })
            .catch(error => {
                console.log(error);
            })
   }
}
</script>