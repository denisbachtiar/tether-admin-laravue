<template>
    <fragment>
    <div class="row">
    <div class="col-lg-4 mb-2" v-for="(i, index) in 6" :key="'x'+index" v-show="isLoading">
        <Skeleton width="100%" height="200px" />
    </div>
        <div class="col-lg-4 col-md-6" v-show="!isLoading" v-for="(item, index) in listData.data" :key="index">
            <div class="card c_grid c_yellow">
                <div class="body text-center">
                    <img :src="item.link" style="width: 100%" alt="">
                    <h6 class="mt-3 mb-0">{{item.name}}</h6>
                    <p>{{item.description}}</p>
                    <button class="btn btn-default btn-sm" @click="EditBanner(item)">Edit</button>
                    <button class="btn btn-danger btn-sm" @click="deleteBanner(item.banner_id, item.link)">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div>
    <pagination :data="listData" @pagination-change-page="getResults" class="ml-auto"></pagination>
    <Modals></Modals>
    </div>
    </fragment>
</template>
<script>
import { Skeleton } from 'vue-loading-skeleton'
import Modals from './Modals'
export default {
    components: {
        Skeleton,
        Modals
    },
    data() {
        return {
            listData: {},
            isLoading: true,
            text: null,
            editDataModal: null
        }
    },
    created() {
        this.getResults();
        this.$root.$refs.ListBanner = this;
    },
    methods: {
        getResults(page) {
            this.isLoading = true
            if (typeof page === 'undefined') {
                page = 1;
            }
            axios
                .post(`/api/activity/banners?page=${page}`,{
                    search: this.text
                })
                .then(response => {
                    this.listData = response.data;
                    this.isLoading = false
                });
            },
        EditBanner(data) {
            const refModal = this.$root.$refs.Modals
            refModal.idBanner = data.banner_id
            refModal.form.title = data.name
            refModal.existFile = data.link
            refModal.form.desc = data.description
            refModal.showModal()
        },
        deleteBanner(id, link) {
            var linx = link.split('/')
            this.$swal({
                    title: 'Delete Banner',
                    text: 'Apakah anda yakin ingin menghapus banner ini?',
                    icon: 'warning',
                    buttons: true,
                    dangerMode: true
                })
                .then((willDelete) => {
                    if (willDelete) {
                        this.isLoading = true
                        axios
                        .post(`/api/activity/banners/delete/${id}`, {
                            image: linx[linx.length - 1]
                        })
                        .then(response => {
                            this.getResults(this.listData.current_page) 
                        });
                    }
                    else {

                    }
                })
        }
    },
}
</script>