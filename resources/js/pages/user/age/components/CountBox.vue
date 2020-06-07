<template>
    <fragment>
        <div class="row">
        <div class="col-4">
            <div class="card mb-2">
                <div class="body top_counter">
                    <div class="icon text-white" style="background-color: #4586df;"></div>
                    <div class="content">
                    <span>Kids</span>
                    <h5 class="number mb-0">
                    <b-spinner v-if="loading" type="grow" label="Loading..."></b-spinner>
                    {{dataBox[0]}}
                    </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card mb-2" style="border: 0 !important;">
                <div class="body top_counter">
                    <div class="icon text-white" style="background-color: #f87979;"></div>
                    <div class="content">
                    <span>Adult</span>
                    <h5 class="number mb-0">
                    <b-spinner v-if="loading" type="grow" label="Loading..."></b-spinner>
                    {{dataBox[1]}}
                    </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card" style="border: 0 !important;">
                <div class="body top_counter">
                    <div class="icon text-white" style="background-color: #45c13d;"></div>
                    <div class="content">
                    <span>Old</span>
                    <h5 class="number mb-0">
                    <b-spinner v-if="loading" type="grow" label="Loading..."></b-spinner>
                    {{dataBox[2]}}
                    </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card" style="border: 0 !important;">
                <div class="body top_counter">
                    <div class="icon text-white" style="background-color: #878787;"></div>
                    <div class="content">
                    <span>Elder</span>
                    <h5 class="number mb-0">
                    <b-spinner v-if="loading" type="grow" label="Loading..."></b-spinner>
                    {{dataBox[3]}}
                    </h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </fragment>
</template>

<script>
export default {
    data: function() {
        return {
            dataBox: {},
            loading: true
        }
    },
    mounted() {
        axios
            .get("/api/user/agegraphpie")
            .then(response => {
                // console.log(response.data.data)
                this.dataBox = response.data.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => (this.loading = false));
    }
}
</script>