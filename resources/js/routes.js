import UserLayout from './components/UserLayout'
import ActivityLayout from './components/ActivityLayout'

export const routes = [
    {
        path: '/user', component: UserLayout, meta: { breadCrumb: 'User' },
        children: [
            {
                path: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard-component" */
                    './pages/user/dashboard/Index'),
                name: 'UserDashboard',
                meta: {
                    auth: true,
                    breadCrumb: 'Dashboard'
                },
            },
            {
                path: 'users',
                component: () => import(/* webpackChunkName: "users-component" */
                    './pages/user/usersData/Index'),
                name: 'UserUsers',
                meta: {
                    auth: true,
                    breadCrumb: 'Users Data'
                },
            },
        ],
    },
    {
        path: '/activity', component: ActivityLayout, meta: { breadCrumb: 'Activity' },
        children: [
            {
                path: 'dashboard',
                component: () => import(/* webpackChunkName: "activity-dashboard-component" */
                    './pages/activity/dashboard/Index'),
                name: 'ActivityDashboard',
                meta: {
                    auth: true,
                    breadCrumb: 'Dashboard Activity'
                },
            }
        ]
    },
    {
        path: '',
        component: () => import(/* webpackChunkName: "login-component" */
            './pages/login/Index'),
        name: 'Login',
        meta: {
            auth: false
        }
    },
    {
        path: '*', redirect: '/'
    }
];
