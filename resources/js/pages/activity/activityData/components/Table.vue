<template>
    <fragment>
        <div class="row clearfix">
                <div class="col-12">
                <b-card>
                <b-form-input v-on:keyup="getResults" v-model="text" placeholder="Title" style="width: 200px;"></b-form-input>
                    <div class="table-responsive mt-2 mb-3">
                        <b-table hover :items="items" :fields="fields" class="table-custom">
                            <template v-slot:cell(number)="row">
                                <span>{{numbering[row.index]}}</span>
                            </template>
                            <template v-slot:cell(date)="row">
                                <span>{{ row.item.date | moment("ddd, MMM YYYY h:mm:ss") }}</span>
                            </template>
                            <template v-slot:cell(active)="row">
                                <b-form-select v-model="row.item.active" v-show="show[row.index]" @change="onChange($event, row.item.activity_id)">
                                    <option value="true">Active</option>
                                    <option value="false">Banned</option>
                                </b-form-select>
                                <i v-show="show[row.index]" @click="onShow(row.index)" class="icon-close text-danger"></i>
                                <span class="text-success" v-if="row.item.active" v-show="!show[row.index]" @click="onShow(row.index)">Active <i class="icon-pencil text-warning"></i></span>
                                <span class="text-danger" v-show="!show[row.index]" @click="onShow(row.index)" v-else>Banned <i class="icon-pencil text-warning"></i></span>
                            </template>
                        </b-table>
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
                {key: 'number', label: 'No'},
                {key: 'title', label: 'Title'},
                {key: 'slot', label: 'Slot'},
                {key: 'date', label: 'Date'},
                {key: 'active', label: 'Status'},
                ],
            tableData: {},
            items: [],
            isLoading: true,
            color: '#4888e0',
            loader: 'dots',
            text: '',
            number: [],
            show: []
        }
    },
    created() {
        this.getResults();
    },
    computed: {
        numbering: function() {
            this.number = []
            for(let i = this.tableData.from; i<=this.tableData.to; i++){
                this.number.push(i)
            }
            return this.number
        },
        showing: function() {
            this.show = []
            for(let i = this.tableData.from; i<=this.tableData.to; i++){
                let t = false
                this.show.push(t)
            }
            return this.show
        }
    },
    methods: {
        getResults(page) {
            this.isLoading = true
            if (typeof page === 'undefined') {
                page = 1;
            }
            axios
                .post(`/api/activity/data?page=${page}`,{
                    search: this.text
                })
                .then(response => {
                    this.tableData = response.data;
                    this.items = response.data.data;
                    this.isLoading = false
                    this.showing
                });
            },
        onChange(event, id) {
                this.$swal({
                    title: 'Update Status',
                    text: 'Apakah anda yakin ingin mengganti status activity ini?',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true
                })
                .then((willDelete) => {
                    if (willDelete) {
                        axios
                        .post(`/api/activity/updatestatus`,{
                            id: id,
                            value: event 
                        })
                        .then(response => {
                            this.getResults(this.tableData.current_page) 
                        });
                    }
                    else {
                        this.getResults(this.tableData.current_page)
                    }
                })
            },
        onShow(index) {
            this.show.splice(index, 1, !this.show[index])
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
    .custom-select {
        width: 65%;
        font-size: .8rem;
        font-weight: 300;
    }
</style>