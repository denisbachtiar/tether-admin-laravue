<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <Breadcrumb></Breadcrumb>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs"></div>
                </div>
            </div>
            <ListBanner></ListBanner>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../../components/layouts/Breadcrumbs'
import ListBanner from './components/ListBanner'
export default {
    components: {
        Breadcrumb,
        ListBanner
    }
};
</script>
