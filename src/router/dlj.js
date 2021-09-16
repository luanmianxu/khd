const dlj = [
    {
        path: '/global',
        name: 'Global',
        component: () => import('@/views/dlj/global.vue'),
        meta: {
            sm: '全球的'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/dlj/about.vue'),
        meta: {
            sm: '关于我们'
        }
    },
    {
        path: '/partner',
        name: 'Partner',
        component: () => import('@/views/dlj/partner.vue'),
        meta: {
            sm: '合租伙伴查询'
        }
    },
    {
        path: '/terms',
        name: 'Terms',
        component: () => import('@/views/dlj/terms.vue'),
        meta: {
            sm: '服务条款'
        }
    },
    {
        path: '/serviceCenter',
        name: 'ServiceCenter',
        component: () => import('@/views/dlj/serviceCenter.vue'),
        meta: {
            sm: '服务中心'
        }
    },
]
export default dlj