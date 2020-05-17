<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <!--Breadcrumb-->
                    <Breadcrumb></Breadcrumb>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs"></div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <div class="d-flex align-items-center">
                                <div
                                    class="icon-in-bg bg-indigo text-white rounded-circle"
                                >
                                    <i class="fa fa-users"></i>
                                </div>
                                <div class="ml-4">
                                    <span>Total User</span>
                                    <h4 class="mb-0 font-weight-medium">
                                        <div
                                            v-if="loading"
                                            class="spinner-grow"
                                            role="status"
                                        >
                                            <span class="sr-only"
                                                >Loading...</span
                                            >
                                        </div>
                                        {{ totalUser }}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <div class="d-flex align-items-center">
                                <div
                                    class="icon-in-bg bg-azura text-white rounded-circle"
                                >
                                    <i class="fa fa-life-ring"></i>
                                </div>
                                <div class="ml-4">
                                    <span>Total Activity</span>
                                    <h4 class="mb-0 font-weight-medium">
                                        <div
                                            v-if="loading"
                                            class="spinner-grow"
                                            role="status"
                                        >
                                            <span class="sr-only"
                                                >Loading...</span
                                            >
                                        </div>
                                        {{ totalActivity }}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Users</h2>
                        </div>
                        <div class="body">
                            <div class="row text-center">
                                <div class="col-6 border-right pb-4 pt-4">
                                    <label class="mb-0">New Users</label>
                                    <h4
                                        class="font-30 font-weight-bold text-col-blue"
                                    >
                                        -
                                    </h4>
                                </div>
                                <div class="col-6 pb-4 pt-4">
                                    <label class="mb-0">Return Visitors</label>
                                    <h4
                                        class="font-30 font-weight-bold text-col-blue"
                                    >
                                        -
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="body">
                            <div class="form-group">
                                <label class="d-block"
                                    >New Users
                                    <span class="float-right">77%</span></label
                                >
                                <div class="progress progress-xxs">
                                    <div
                                        class="progress-bar progress-bar-success"
                                        role="progressbar"
                                        aria-valuenow="77"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style="width: 77%;"
                                    ></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="d-block"
                                    >Return Visitors
                                    <span class="float-right">50%</span></label
                                >
                                <div class="progress progress-xxs">
                                    <div
                                        class="progress-bar progress-bar-warning"
                                        role="progressbar"
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style="width: 50%;"
                                    ></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="d-block"
                                    >Engagement
                                    <span class="float-right">23%</span></label
                                >
                                <div class="progress progress-xxs">
                                    <div
                                        class="progress-bar progress-bar-info"
                                        role="progressbar"
                                        aria-valuenow="23"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style="width: 23%;"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="card user_statistics">
                        <div class="header">
                            <h2>Users Report</h2>
                        </div>
                        <div class="body">
                             <div>
                                <apexchart width="500" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Breadcrumb from './layouts/Breadcrumbs'
export default {
    name: 'LineExample',
    components: {
        Breadcrumb: Breadcrumb,
    },
    data: function() {
        return {
        chartOptions: {
            xaxis: {
            type: 'datetime',
            categories: ['01/01/2003', '02/01/2003','03/01/2003','04/01/2003','05/01/2003','06/01/2003','07/01/2003','08/01/2003'],
            },
        },
        series: [{
            name: 'Series A',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }, {
            name: 'Series B',
            data: [23, 43, 54, 12, 44, 52, 32, 11]
        }],
        totalUser: null,
        totalActivity: null,
        loading: true
        }
    },
    methods: {
        generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push([x, y]);
            baseval += 86400000;
            i++;
            }
            return series;
        },
        updateChart() {
            let series = [
                {
                name: 'South',
                data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 60
                })
            },
            {
                name: 'North',
                data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 20
                })
            },
            
            {
                name: 'Central',
                data: this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 15
                })
            }
            ]
            this.series = series
        }
    },
    mounted() {
        axios
            .get("http://localhost:8000/api/dashboard")
            .then(response => {
                this.totalUser = response.data.totaluser;
                this.totalActivity = response.data.totalactivity;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => (this.loading = false));
    }
    // data() {
    //     return {
    //         totalUser: null,
    //         totalActivity: null,
    //         loading: true
    //     };
    // },
    // mounted() {
    //     axios
    //         .get("http://localhost:8000/api/dashboard")
    //         .then(response => {
    //             this.totalUser = response.data.totaluser;
    //             this.totalActivity = response.data.totalactivity;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //         .finally(() => (this.loading = false));
    // }
};
</script>
