<template>
    <div>
        <span class="loading-chart-pie">Loading...</span>
        <vue-c3 :handler="handler"></vue-c3>
        <!--<span>{{ new Date() | moment("subtract", "1 month") | moment("MMM YYYY")}}</span>-->
    </div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
export default {
    components: {
      VueC3
    },
    data () {
      return {
        handler: new Vue(),
        pie: null,
        piedata: null
      }
    },
    mounted () {
      axios
            .get("http://localhost:8000/api/dashboard/graphagepie")
            .then(response => {
                this.piedata = response.data
                this.pie = {
                    data: {
                            json: this.piedata,
                            // url: '/api/dashboard/graphagepie',
                            // 'mimeType': 'json',
                            keys: {
                                // x: 'date',
                                value: ['kids','adult','old','elder']
                            },
                            type: 'pie', // default type of chart
                            colors: {
                                kids: '#1e78da',
                                adult: '#fa7f0f',
                                old: '#d41111',
                                elder: '#000000'
                            },
                            names: {
                                // name of each serie
                                kids: '>17',
                                adult: '17-30',
                                old: '31-45',
                                elder: '>46'
                            }
                        },
                        axis: {
                        },
                        legend: {
                            show: true, //hide legend
                        },
                        padding: {
                            bottom: 20,
                            top: 0
                        },
                        onrendered: function() {
                            $('.loading-chart-pie').addClass('d-none');
                        }
                }
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => (this.handler.$emit('init', this.pie)));
    }
}
</script>