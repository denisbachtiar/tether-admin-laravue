<template>
    <fragment>
        <div id="left-sidebar" class="sidebar">
            <div class="navbar-brand">
                <a href="index.html"
                    ><img
                        src="../../../../../public/img/theter-icon.png"
                        alt="Oculux Logo"
                        class="img-fluid logo"
                    /><span>tether.</span></a
                >
                <button
                    type="button"
                    class="btn-toggle-offcanvas btn btn-sm float-right"
                >
                    <i class="lnr lnr-menu icon-close"></i>
                </button>
            </div>
            <div class="sidebar-scroll">
                <div class="user-account mb-1">
                    <div class="dropdown">
                        <span>Welcome,</span>
                        <a
                            href="javascript:void(0);"
                            class="user-name"
                            data-toggle="dropdown"
                            ><strong>Admin</strong></a
                        >
                    </div>
                </div>
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul id="main-menu" class="metismenu">
                        <li class="header">Main</li>
                        <li>
                            <router-link :to="{ name: 'UserDashboard' }">
                                <i class="icon-speedometer"></i
                                >
                                <span>Dashboard</span>
                            </router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'UserUsers' }">
                                <i class="icon-users"></i><span>Users</span>
                            </router-link>
                        </li>
                        <li class="header">Statistic</li>
                        <li class="">
                            <router-link :to="{ name: 'UserGender' }">
                                <i class="icon-symbol-female"></i><span>Gender</span>
                            </router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'UserAge' }">
                                <i class="icon-clock"></i><span>Age</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </fragment>
</template>

<style lang="scss">
    .metismenu {
        a {
            &.router-link-exact-active {
                color: #4586df;
                i {
                    background-color: #4888e0;
                    color: white;
                }
            }
        }

    }
</style>
