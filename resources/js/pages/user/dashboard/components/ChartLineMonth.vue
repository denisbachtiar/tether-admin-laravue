<template>
    <div>
        <span class="loading-chart">Loading...</span>
        <vue-c3 :handler="handler"></vue-c3>
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
        options: null,
        dataOption: null,
        dateOption: null
      }
    },
    mounted () {
        axios
            .get("http://localhost:8000/api/dashboard/graphmonth")
            .then(response => {
                this.dataOption = response.data
                this.dateOption = this.dataOption.map( (value) => {
                    return value[3]
                })
                this.options = {
                    data: {
                            json: this.dataOption,
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
                                categories: this.dateOption
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
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => (this.handler.$emit('init', this.options)));
    }
}
</script>