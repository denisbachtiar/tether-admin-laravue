<template>
    <fragment>
        <span v-if="loaded == false">Loading...</span>
        <Chart :height="508" v-if="loaded" :chartdata="chartdata"/>
    </fragment>
</template>

<script>
import { Pie } from 'vue-chartjs'
// Inline Chart Component
const Chart = {
    extends: Pie,
    props: {
        chartdata: {
            type: Object,
            default: null
        }
    },
    data: function () {
        return {
            datachart: {
            labels: this.chartdata.labels,
            datasets: [
                {
                    data: this.chartdata.data,
                    backgroundColor: [
                        "#4b77a9",
                        "#5f255f",
                        "#d21243",
                        "#B27200"
                    ],
                }
            ],
        },
        options: {
        }
        }
    },
    mounted () {
        this.renderChart(this.datachart, this.options)
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
            .get("/api/user/agegraphpie")
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