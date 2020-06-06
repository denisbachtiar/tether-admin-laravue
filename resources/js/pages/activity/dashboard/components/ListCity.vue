<template>
    <fragment>
    <Skeleton v-if="loading" count="7" width="100%" height="40px" />
        <table class="table table-hover table-custom spacing5 m-t--5 mb-0">
            <tbody>
                <tr v-for="(item, index) in listCity" :key="index">
                    <td class="font-weight-bold">{{item.city_name}}</td>
                    <td class="text-right">{{item.amount}}</td>
                </tr>
            </tbody>
        </table>
    </fragment>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton';
export default {
    components: {
        Skeleton
    },
    data: function() {
        return {
            listCity: [],
            loading: true
        }
    },
    mounted() {
        axios
        .get('/api/activity/listcity')
        .then(response => {
            this.listCity = response.data
            this.loading = false
        })
    },
}
</script>

<style lang="scss">
    
</style>