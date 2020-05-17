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
                <div class="card-body">
                    <data-table
                        :columns="columns"
                        url="http://localhost:8000/api/datauser"
                        theme="light"
                        orderBy="user_id"
                        @loading="isLoading = true"
                        @finishedLoading="isLoading = false"
                    >
                    </data-table>
                    <loading 
                    :is-full-page="true" 
                    :active.sync="isLoading">
                    </loading>
                    <!-- <table
                        id="dataTableData"
                        style="width: 100%;"
                        class="table table-striped dataTable"
                    >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Username/fullname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Birthdate</th>
                                <th>Created at</th>
                            </tr>
                        </thead>
                    </table> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"
import Breadcrumb from './layouts/Breadcrumbs'
export default {
    components: {
        Breadcrumb: Breadcrumb,
    },
    data() {
        return {
            // isLoading: false,
            columns: [
                {
                    label: "fullname",
                    name: "fullname",
                    orderable: true
                },
                {
                    label: "email",
                    name: "email"
                },
                {
                    label: "Phone",
                    name: "phone"
                },
                {
                    label: "Birthdate",
                    name: "birthdate"
                }
            ]
        };
    }
};
</script>
