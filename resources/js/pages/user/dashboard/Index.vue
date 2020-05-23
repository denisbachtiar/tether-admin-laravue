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

            <!--BoxStat Component-->
            <BoxStat></BoxStat>

            <div class="row clearfix">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Users</h2>
                        </div>
                        <div class="body">
                           <ChartAgePie></ChartAgePie> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="card user_statistics">
                        <div class="header">
                            <h2>Users Report</h2>
                        </div>
                        <div class="body">
                            <!-- ChartLineMonth -->
                            <ChartLineMonth></ChartLineMonth>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Breadcrumb from '../../../components/layouts/Breadcrumbs'
import BoxStat from './components/BoxStat'
import ChartLineMonth from './components/ChartLineMonth'
import ChartAgePie from './components/ChartAgePie'
export default {
    name: 'Dashboard',
    components: {
        Breadcrumb: Breadcrumb,
        ChartLineMonth: ChartLineMonth,
        ChartAgePie: ChartAgePie,
        BoxStat: BoxStat
    },
};
</script>
