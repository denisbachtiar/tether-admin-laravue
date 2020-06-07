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
            {
                path: 'gender',
                component: () => import(/* webpackChunkName: "users-component" */
                    './pages/user/gender/Index'),
                name: 'UserGender',
                meta: {
                    auth: true,
                    breadCrumb: 'Gender'
                },
            },
            {
                path: 'age',
                component: () => import(/* webpackChunkName: "users-component" */
                    './pages/user/age/Index'),
                name: 'UserAge',
                meta: {
                    auth: true,
                    breadCrumb: 'Age'
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
            },
            {
                path: 'activities',
                component: () => import(/* webpackChunkName: "activity-dashboard-component" */
                    './pages/activity/activityData/Index'),
                name: 'Activities',
                meta: {
                    auth: true,
                    breadCrumb: 'Activity Data'
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
