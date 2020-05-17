<template>
    <div>
        <!-- Overlay For Sidebars -->
        <div class="overlay"></div>

        <div id="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
export default {
    components: {
        Sidebar: Sidebar,
        Navbar: Navbar
    }
};
</script>
