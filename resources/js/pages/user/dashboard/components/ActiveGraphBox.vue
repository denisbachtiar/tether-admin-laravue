<template>
    <div class="card-chart-bg pt-4">
        <vue-c3 :handler="handler" style="height: 60px"></vue-c3>
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
        handler: new Vue()
      }
    },
    mounted () {
      // to init the graph call:
    this.$nextTick(function() {
      const options = {
          padding: {
            bottom: -10,
            left: -1,
            right: -1
        },
        data: {
            url: '/api/dashboard/activegraphbox',
            'mimeType': 'json',
            keys: {
                value: ['0']
            },
            names: {
                0: 'Active Users'
            },
            type: 'area',
        },
        legend: {
            show: false
        },
        transition: {
            duration: 0
        },
        point: {
            show: false
        },
        tooltip: {
            format: {
                title: function (x) {
                    return '';
                }
            }
        },
        axis: {
            y: {
                padding: {
                    bottom: 0,
                },
                show: false,
                tick: {
                    outer: false
                }
            },
            x: {
                padding: {
                    left: 0,
                    right: 0
                },
                show: false
            }
        },
        color: {
            pattern: ['#e74c3c']
        }
      }
      this.handler.$emit('init', options)
    })
    }
}
</script>