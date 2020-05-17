<template>
    <div>
        <div id="left-sidebar" class="sidebar">
            <div class="navbar-brand">
                <a href="index.html"
                    ><img
                        src="../../../../public/img/theter-icon.png"
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
                            ><strong>Louis Pierce</strong></a
                        >
                    </div>
                </div>
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul id="main-menu" class="metismenu">
                        <li class="header">Main</li>
                        <li class="">
                            <router-link :to="{ name: 'Dashboard' }">
                                <i class="icon-speedometer"></i
                                ><span>Dashboard</span>
                            </router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Users' }">
                                <i class="icon-users"></i><span>Users</span>
                            </router-link>
                        </li>
                        <li class="">
                            <a href=""
                                ><i class="icon-cup"></i
                                ><span>Activity</span></a
                            >
                        </li>
                        <li class="">
                            <a href=""
                                ><i class=" icon-list"></i
                                ><span>Category</span></a
                            >
                        </li>
                        <li>
                            <a href="#"
                                ><i class=" icon-puzzle"></i
                                ><span>Maintenance</span></a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
