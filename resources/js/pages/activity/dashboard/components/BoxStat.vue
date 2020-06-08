<template>
        <div class="row clearfix">
                <div class="col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-auto">
                                </div>
                                <div class="col text-right">
                                    <div class="text-muted">All Activity</div>
                                    <b-spinner v-if="loading" type="grow" label="Loading..."></b-spinner>
                                    <div class="h4 mb-0">{{ dataBox.all }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-auto">
                                </div>
                                <div class="col text-right">
                                    <div class="text-muted">Existing Activty</div>
                                    <b-spinner v-if="loading" type="grow" label="Loading..."></b-spinner>
                                    <div class="h4 mb-0">{{ dataBox.exist }}</div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-auto">
                                </div>
                                <div class="col text-right">
                                    <div class="text-muted">Finish Activity</div>
                                    <b-spinner v-if="loading" type="grow" label="Loading..."></b-spinner>
                                    <div class="h4 mb-0">{{ dataBox.finish }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div> 
</template>

<script>
import axios from "axios"
export default {
    data: function() {
        return {
            dataBox: {},
            loading: true
        }
    },
    created() {
        axios
            .get("/api/activity/boxstatcount")
            .then(response => {
                // console.log(response.data)
                this.dataBox = response.data;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => (this.loading = false));
    }
}
</script>