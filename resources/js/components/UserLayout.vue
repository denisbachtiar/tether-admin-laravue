<template>
        <div id="wrapper">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <router-view></router-view>
        </div>
</template>
<script>
import Sidebar from "./layouts/Sidebar"
import Navbar from "./layouts/Navbar"
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    components: {
        Sidebar: Sidebar,
        Navbar: Navbar
    }
};
</script>
