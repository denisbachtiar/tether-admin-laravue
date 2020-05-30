import UserLayout from './components/UserLayout'

export const routes = [
    {
        path: '/user', component: UserLayout, hidden: true,
        children: [
            {
                path: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard-component" */
                    './pages/user/dashboard/Index'),
                name: 'UserDashboard',
                meta: {
                    breadCrumb: 'Dashboard'
                },
            },
            {
                path: 'users',
                component: () => import(/* webpackChunkName: "users-component" */
                    './pages/user/usersData/Index'),
                name: 'UserUsers',
                meta: {
                    breadCrumb: 'Users Data'
                },
            },
        ],
    },
    {
        path: '',
        component: () => import(/* webpackChunkName: "login-component" */
            './pages/login/Index'),
        name: 'Login'
    },
    {
        path: '*', redirect: '/'
    }
];
