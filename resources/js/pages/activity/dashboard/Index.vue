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

            <BoxStat></BoxStat>

            <div class="row clearfix">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Kota Terbanyak</h2>
                        </div>
                        <!--List City Component-->
                        <ListCity/>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="card user_statistics">
                        <div class="header">
                            <h2>Monthly Activity Report</h2>
                        </div>
                        <div class="body">                            
                            <!--Monthly Report Component-->
                            <MonthlyGraph/>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../../components/layouts/Breadcrumbs'
import BoxStat from './components/BoxStat'
import ListCity from './components/ListCity'
import MonthlyGraph from './components/MonthlyGraph'
export default {
    components: {
        Breadcrumb,
        BoxStat,
        ListCity,
        MonthlyGraph
    },
};
</script>
