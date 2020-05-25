// import Dashboard from './components/Dashboard.vue';
// import Users from './components/Users.vue'

const Dashboard = () => import(/* webpackChunkName: "dashboard-component" */
    './pages/user/dashboard/Index.vue');

const Users = () => import(/* webpackChunkName: "users-component" */
    './pages/user/usersData/Index.vue');

export const routes = [{
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    meta: {
        breadCrumb: 'Dashboard'
    },
},
{
    path: '/users',
    component: Users,
    name: 'Users',
    meta: {
        breadCrumb: 'Users Data'
    },
}
];
