<template>
    <div>
        <span class="loading-chart">Loading...</span>
        <vue-c3 :handler="handler"></vue-c3>
    </div>
</template>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3'
import * as moment from "moment/moment";
export default {
    components: {
      VueC3
    },
    data () {
      return {
        handler: new Vue()
      }
    },
    mounted () {
      // to init the graph call:
      var months = new Array();
      var y = null
      for(y=6; y>=0; y--){
        months.push(moment().subtract(y, 'months').format('MMM Y'))
      };
      const options = {
        data: {
                url: '/api/dashboard/graphmonth',
                'mimeType': 'json',
                keys: {
                    value: ['0','1','2']
                },
                type: 'line', 
                colors: {
                    0: '#1e78da',         
                    1: '#fa7f0f',
                    2: '#d41111'
                },
                names: {
                    0: 'Male',      
                    1: 'Female',
                    2: 'Undefined'
                },
                order: 'desc'
        },
        grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            axis: {
                x: {
                    type: 'category',
                    categories: months
                },
                y: {
                    tick: {
                        format: function (d) {
                            return (parseInt(d) == d) ? d : null;
                        }
                    }
                }
            },
            bar: {
                width: 16
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 20,
                top: 0
            },
            onrendered: function () {
                $('.loading-chart').addClass('d-none');
            }
      }
      this.handler.$emit('init', options)
    }
}
</script>