<template>
    <fragment>
    <b-card>
        <loading 
            :is-full-page="false" 
            :loader="loader"
            :color="color"
            :active.sync="isLoading">
        </loading>
        <b-table hover :items="tableData.data" :fields="fields" class="table-custom">
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
                <p v-if="row.item.gender == 'm'" class="mb-0">Pria</p>
                <p v-else-if="row.item.gender == 'f'" class="mb-0">Wanita</p>
                <p v-else class="mb-0">Undefined</p>
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
                // {key: 'avatar', label: ''},
                {key: 'fullname', label: 'Nama/username'},
                {key: 'email', label: 'Email'},
                {key: 'phone', label: 'Nomor'},
                {key: 'gender', label: 'Gender'}
            ],
            isLoading: false,
            color: '#4888e0',
            loader: 'dots',
            tableData: {},
            text: null,
            number: []
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
                    // this.showing
                });
            },
    },
};
</script>

<style lang="scss">
</style>