<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <!--Breadcrumb Component-->
                    <Breadcrumb></Breadcrumb>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs"></div>
                </div>
            </div>

            <div class="row clearfix">
            <div class="col-sm-12">
                <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-lg-4 col-md-12 col-sm-12">
                                    <div class="mb-5"></div>
                                    <PieChart/>
                                </div>
                                <div class="col-lg-8 col-md-12 col-sm-12">
                                    <b-tabs pills align="right" lazy>
                                        <b-tab title="Daily" active>
                                            <DailyGraph/>
                                        </b-tab>
                                        <b-tab title="Weekly">
                                            <WeeklyGraph/>
                                        </b-tab>
                                        <b-tab title="Monthly">
                                            <MonthlyGraph/>
                                        </b-tab>
                                    </b-tabs>
                                </div>
                            </div>
                            <hr>
                            <!--CountBox-->
                            <CountBox/>
                        </div>
                    </div>
            </div>             
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../../components/layouts/Breadcrumbs'
import PieChart from './components/PieChart'
import DailyGraph from './components/DailyGraph'
import MonthlyGraph from './components/MonthlyGraph'
import WeeklyGraph from './components/WeeklyGraph'
import CountBox from './components/CountBox'
export default {
    components: {
        Breadcrumb,
        PieChart,
        DailyGraph,
        WeeklyGraph,
        MonthlyGraph,
        CountBox
    },
};
</script>
