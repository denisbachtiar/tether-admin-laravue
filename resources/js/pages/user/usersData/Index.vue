<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <Breadcrumb></Breadcrumb>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs"></div>
                </div>
            </div>
            <div class="card">
                <div class="card-body datatable">
                    <DataTable></DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../../components/layouts/Breadcrumbs'
import DataTable from './components/DataTable'
export default {
    components: {
        Breadcrumb,
        DataTable
    }
};
</script>
