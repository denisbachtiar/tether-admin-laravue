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
                labels: ['Last Week 6','Last Week 5','Last Week 4','Last Week 3','Last Week 2','Last Week','This Week'],
                datasets: [
                    {
                        label: 'Male',
                        fill: false,
                        lineTension: 0.1,
                        borderColor: '#4586df',
                        data: this.chartdata[0]
                    },
                    {
                        label: 'Female',
                        fill: false,
                        lineTension: 0.1,
                        borderColor: '#f87979',
                        data: this.chartdata[1]
                    },
                    {
                        label: 'Undefined',
                        fill: false,
                        lineTension: 0.1,
                        borderColor: '#878787',
                        data: this.chartdata[2]
                    }
                ],
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
            .get("/api/user/weeklygraphgender")
            .then(response => {
                this.chartdata = response.data
                this.loaded = true
            })
            .catch(error => {
                console.log(error);
            })
   }
}
</script>