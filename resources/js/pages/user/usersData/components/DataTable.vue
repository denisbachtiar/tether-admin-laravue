<template>
    <fragment>
        <data-table
            :columns="columns"
            url="/api/datauser"
            orderBy="user_id"
            @loading="isLoading = true"
            @finishedLoading="isLoading = false"
        >
        </data-table>
        <loading 
            :is-full-page="false" 
            :loader="loader"
            :color="color"
            :active.sync="isLoading">
        </loading>
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
            isLoading: false,
            color: '#4888e0',
            loader: 'dots',
            columns: [
                {
                    label: "Full Name",
                    name: "fullname",
                    orderable: true
                },
                {
                    label: "Email",
                    name: "email"
                },
                {
                    label: "Phone",
                    name: "phone",
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

<style lang="scss">
    .card-body {
        .table-responsive {
            table.laravel-vue-datatable {
                border-collapse: separate;
                border: unset !important;
            }
        }
    }
</style>