<template>
    <fragment>
        <div class="row clearfix">
                <div class="col-12">
                    <div class="table-responsive">
                        <b-table hover :items="items" :fields="fields" class="table-custom spacing8"></b-table>
                        <loading 
                            :is-full-page="false" 
                            :loader="loader"
                            :color="color"
                            :active.sync="isLoading">
                        </loading>
                    </div>
                    <pagination :data="tableData" @pagination-change-page="getResults"></pagination>
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
            axios
                .get('/api/activity/data?page=' + page)
                .then(response => {
                    this.tableData = response.data;
                    this.items = response.data.data;
                    this.isLoading = false
                    // console.log(this.items)
                });
            }
        }
    }
</script>