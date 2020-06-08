<template>
    <fragment>
        <div class="row clearfix">
                <div class="col-12">
                <b-card>
                <b-form-input v-on:keyup="getResults" v-model="text" placeholder="Search" style="width: 250px;"></b-form-input>
                    <div class="table-responsive mt-2 mb-3">
                        <b-table hover :items="items" :fields="fields" class="table-custom"></b-table>
                        <loading 
                            :is-full-page="false" 
                            :loader="loader"
                            :color="color"
                            :active.sync="isLoading">
                        </loading>
                    </div>
                    <div class="d-flex align-items-center">
                        <span>Showing {{tableData.from}} to {{tableData.to}} of {{tableData.total}} entries</span>
                        <pagination :data="tableData" @pagination-change-page="getResults" class="ml-auto mb-0"></pagination>
                    </div>
                    </b-card>
                </div>
            </div>
    </fragment>
</template>

<script>
import Loading from "vue-loading-overlay"
import "vue-loading-overlay/dist/vue-loading.css"
export default {
    components: {
        Loading
    },
    data() {
        return {
            fields: [
                {key: 'title', label: 'Title'},
                {key: 'slot', label: 'Slot'},
                {key: 'date', label: 'Date Create'}
                ],
            tableData: {},
            items: [],
            isLoading: true,
            color: '#4888e0',
            loader: 'dots',
            text: ''
        }
    },
    created() {
        this.getResults();
    },
    methods: {
        getResults(page) {
            this.isLoading = true
            if (typeof page === 'undefined') {
                page = 1;
            }
            // axios
            //     .get(`/api/activity/data/${this.text}?page=${page}`)
            //     .then(response => {
            //         this.tableData = response.data;
            //         this.items = response.data.data;
            //         this.isLoading = false
            //     });
            axios
                .post(`/api/activity/data?page=${page}`,{
                    search: this.text
                })
                .then(response => {
                    this.tableData = response.data;
                    this.items = response.data.data;
                    this.isLoading = false
                });
            }
        }
    }
</script>
<style lang="scss">
    .table {
        color: #505050;
        font-weight: 300;
    }
    .light_version .table.table-custom tbody tr {
        cursor: pointer;
        &:hover {
            background-color: whitesmoke;
        }
    }
    .pagination {
        justify-content: flex-end;
    }
</style>