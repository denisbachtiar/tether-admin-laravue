<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <Breadcrumb></Breadcrumb>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs"></div>
                </div>
            </div>
            <Table></Table>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../../components/layouts/Breadcrumbs'
import Table from './components/Table'
export default {
    components: {
        Breadcrumb,
        Table
    }
};
</script>
