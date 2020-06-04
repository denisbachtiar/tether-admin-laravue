<template>
    <fragment>
        <nav class="navbar top-navbar">
            <div class="container-fluid">
                <div class="navbar-left">
                    <!--<ul class="nav navbar-nav">
                        <li class="ml-3">
                            <label class="switch">
                                <input type="checkbox" class="checkmode" />
                                <span class="slider round"></span>
                            </label>
                        </li>
                    </ul> -->
                    <ul class="nav navbar-nav">
                        <li class="p_home"><router-link :to="{ name: 'UserDashboard' }" :class="currentPage.includes('user') ? 'home icon-nav active':'home icon-nav'" title="Home">User</router-link></li>
                        <li class="p_social"><router-link :to="{ name: 'ActivityDashboard' }" :class="currentPage.includes('activity') ? 'social icon-nav active':'social icon-nav'" title="Activity">Activity</router-link></li>
                        <li class="p_news"><a href="" class="news icon-nav" title="News">Event</a></li>
                        <!--<li class="p_blog"><a href="#" class="blog icon-nav" title="Blog">News</a></li>-->
                    </ul>
                </div>
                <div class="navbar-right ml-auto">
                    <div id="navbar-menu">
                        <ul class="nav navbar-nav">
                            <li>
                                <a
                                    href="javasript:void(0)"
                                    data-toggle="modal"
                                    data-target=".modalLogout"
                                    class="icon-nav"
                                    v-b-modal.modal-1
                                    ><i class="icon-power"></i
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="progress-container">
                <div class="progress-bar" id="myBar"></div>
            </div>
        </nav>
        <!-- LOGOUT MODAL -->
        <b-modal id="modal-1" size="sm">
            <template v-slot:modal-title>
                <h5>Logout</h5>
            </template>
            <div class="d-block text-center">
                <h6>Are you sure want to logout?</h6>
            </div>
            <template v-slot:modal-footer>
                <b-button @click="$bvModal.hide('modal-1')">No, Cancel</b-button>
                <button type="button" class="btn btn-danger" v-on:click="logout">Yes, Logout</button>
            </template>
        </b-modal>
    </fragment>
</template>

<script>
export default {
    data () {
        return {
            activeClass: ''
        }
    },
    computed: {
        currentPage() {
            return this.$route.path
        }
    },
    methods: {
        logout () {
            this.$store.dispatch('logout')
        }
    }
}
</script>
