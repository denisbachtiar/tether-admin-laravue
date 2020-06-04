/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from "vue";
import VueRouter from "vue-router"
import DataTable from "laravel-vue-datatable"
import { routes } from "./routes"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Fragment from 'vue-fragment'
import VueParticles from 'vue-particles'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import SimpleLineIcons from 'vue-simple-line'
require("./bootstrap");

window.Vue = require("vue")
Vue.use(VueRouter)
Vue.use(DataTable)
Vue.use(require('vue-moment'))
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueParticles)
Vue.use(Fragment.Plugin)
Vue.component('simple-line-icons', SimpleLineIcons)

import App from "./components/App";
import store from "./store"

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    NProgress.start()
    const loggedIn = localStorage.getItem('token')
    var metaauth = to.matched.some(record => record.meta.auth)

    if (metaauth && !loggedIn) {
        next('/')
        return
    }
    else if (metaauth == false && loggedIn != null) {
        next('/user/dashboard')
        return
    }
    next()
})
router.afterEach(() => {
    NProgress.done(true)
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
});
