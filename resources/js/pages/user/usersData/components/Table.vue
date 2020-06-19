<template>
    <fragment>
    <b-card>
        <loading 
            :is-full-page="false" 
            :loader="loader"
            :color="color"
            :active.sync="isLoading">
        </loading>
        <b-form-input v-on:keyup="getResults" v-model="text" placeholder="Nama" style="width: 200px;"></b-form-input>
        <b-table hover :items="tableData.data" :fields="fields" responsive class="table-custom mt-3">
            <template v-slot:cell(number)="row">
                <span>{{numbering[row.index]}}</span>
            </template>
            <template v-slot:cell(fullname)="row">
                <div class="d-flex align-items-center">
                    <img :src="row.item.avatar" class="w35 rounded">
                    <div class="ml-2">
                        <p class="mb-0">{{row.item.fullname}}</p>
                        <p class="mb-0"><small>@{{row.item.username}}</small></p>
                    </div>
                </div>
            </template>
            <template v-slot:cell(gender)="row">
                <p v-if="row.item.gender == 'm'" class="mb-0 text-center"><simple-line-icons icon="symbol-male" size="large" color="blue" no-svg/></p>
                <p v-else-if="row.item.gender == 'f'" class="mb-0 text-center"><simple-line-icons icon="symbol-female" size="large" color="pink" no-svg/></p>
                <p v-else class="mb-0 text-center">-</p>
            </template>
            <template v-slot:cell(createdAt)="row">
                <span>{{ row.item.createdAt | moment("ddd, MMM YYYY") }}</span>
            </template>
            <template v-slot:cell(status_banned)="row" class="text-center">
                <b-form-select v-model="row.item.status_banned" v-show="show[row.index]" @change="onChange($event, row.item.user_id)">
                    <option value="true">Active</option>
                    <option value="false">Banned</option>
                </b-form-select>
                <i v-show="show[row.index]" @click="onShow(row.index)" class="icon-close text-danger"></i>
                <span class="text-success" v-if="row.item.status_banned" v-show="!show[row.index]" @click="onShow(row.index)">Active <i class="icon-pencil text-dark"></i></span>
                <span class="text-danger" v-show="!show[row.index]" @click="onShow(row.index)" v-else>Banned <i class="icon-pencil text-dark"></i></span>
            </template>
        </b-table>
        <div class="d-flex align-items-center">
        <span>Showing {{tableData.from}} to {{tableData.to}} of {{tableData.total}} entries</span>
        <pagination :data="tableData" @pagination-change-page="getResults" class="ml-auto mb-0"></pagination>
        </div>
    </b-card>
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
                // {key: 'active', label: 'Status'},
                {key: 'fullname', label: 'Nama/username'},
                {key: 'email', label: 'Email'},
                {key: 'phone', label: 'Nomor'},
                {key: 'gender', label: 'Gender'},
                {key: 'createdAt', label: 'CreatedAt'},
                {key: 'status_banned', label: 'Status', stickyColumn: true, variant: 'secondary'}
            ],
            isLoading: false,
            color: '#4888e0',
            loader: 'dots',
            tableData: {},
            text: null,
            number: [],
            show: []
        };
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
            console.log('halo')
            this.isLoading = true
            if (typeof page === 'undefined') {
                page = 1;
            }
            axios
                .post(`/api/user/datauser?page=${page}`,{
                    search: this.text
                })
                .then(response => {
                    this.tableData = response.data;
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
                        this.isLoading = true
                        axios
                        .post(`/api/user/updatestatus`,{
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
            },
    },
};
</script>

<style lang="scss">
    .b-table-sticky-column {
        left: unset;
        right: 0;
    }
    th:nth-child(7) {
        padding-left: 50px;
        padding-right: 50px;
    }
    td:nth-child(7) {
        text-align: center;
    }
    .custom-select {
        width: 75%;
    }
    .table-secondary {
        background-color: #f7f7f7;
    }
</style>