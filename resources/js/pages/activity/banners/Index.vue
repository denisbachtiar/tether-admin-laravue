<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row clearfix">
                    <Breadcrumb></Breadcrumb>
                    <div class="col-md-6 col-sm-12 text-right hidden-xs"><button type="button" class="btn btn-sm btn-primary" @click="showModalAdd">Add New</button></div>
                </div>
            </div>
            <ListBanner></ListBanner>
            <ModalAdd/>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../../components/layouts/Breadcrumbs'
import ListBanner from './components/ListBanner'
import ModalAdd from './components/ModalAdd'
export default {
    components: {
        Breadcrumb,
        ListBanner,
        ModalAdd
    },
    methods: {
        showModalAdd() {
            this.$root.$refs.ModalAdd.showModal();
        }
    },
};
</script>
