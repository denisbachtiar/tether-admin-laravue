<template>
        <div class="row clearfix">
                <div class="col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-auto">
                                </div>
                                <div class="col text-right">
                                    <div class="text-muted">All User</div>
                                    <div v-if="loading" class="spinner-grow" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div class="h4 mb-0">{{ all }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-chart-bg pt-4">
                            <div id="chart-bg-users-1" style="height: 60px"></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-auto">
                                </div>
                                <div class="col text-right">
                                    <div class="text-muted">Active User</div>
                                    <div v-if="loading" class="spinner-grow" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div class="h4 mb-0">{{ active }}</div>
                                </div>
                            </div>                            
                        </div>
                        <div class="card-chart-bg pt-4">
                            <div id="chart-bg-users-2" style="height: 60px"></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-auto">
                                </div>
                                <div class="col text-right">
                                    <div class="text-muted">Iddle User</div>
                                    <div v-if="loading" class="spinner-grow" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div class="h4 mb-0">{{ iddle }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-chart-bg pt-4">
                            <div id="chart-bg-users-3" style="height: 60px"></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-auto">
                                </div>
                                <div class="col text-right">
                                    <div class="text-muted">Non Active User</div>
                                    <div v-if="loading" class="spinner-grow" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div class="h4 mb-0">{{ nonactive }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-chart-bg pt-4">
                            <div id="chart-bg-users-4" style="height: 60px"></div>
                        </div>
                    </div>
                </div>                
            </div> 
</template>

<script>
export default {
    data: function() {
        return {
            all: null,
            active: null,
            iddle: null,
            nonactive: null,
            loading: true
        }
    },
    mounted() {
        axios
            .get("http://localhost:8000/api/dashboard")
            .then(response => {
                // console.log(response.data)
                this.all = response.data.all;
                this.active = response.data.active;
                this.iddle = response.data.iddle;
                this.nonactive = response.data.nonactive;
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => (this.loading = false));
    }
}
</script>