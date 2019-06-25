const Home = () => import('@/views/Home')
const List = () => import('@/views/List')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const Detail = () => import('@/views/Detail')
const Search = () => import('@/views/Search')
import zfFooter from '@/components/zfFooter'
import navList from '@/components/navList'
import tuiJian from '@/components/tuiJian'
import listTab from '@/components/listTab'
import listDetail from '@/components/listDetail'

export default [
        {
            path: '/',
            redirect: '/home',
            meta: {}
        },
        {
            path: '/home',
            name: 'home',
            components: {
                default: Home,
                footer: zfFooter
            },
            children: [
                {
                    path: ':id',
                    name: 'childHome',
                    component: tuiJian
                },
                {
                    path: 'tab/:id',
                    component: navList
                }
            ],
            meta: {
                path: 'home',
                icon: '&#xe610',
                title: '首页',
                isTab: true
            }
        },
        {
            path: '/list',
            name: 'list',
            components: {
                default: List,
                footer: zfFooter
            },
            children: [
                {
                    path: 'tab/:id',
                    components: {
                        listTab: listTab,
                        default: listDetail
                    }
                }
            ],
            meta: {
                path: 'list',
                icon: '&#xe65e',
                title: '列表',
                isTab: true
            }
        },
        {
            path: '/cart',
            name: 'cart',
            components: {
                default: Cart,
                footer: zfFooter
            },
            meta: {
                path: 'cart',
                icon: '&#xe62d',
                title: '购物车',
                isTab: true
            }
        },
        {
            path: '/mine',
            name: 'mine',
            components: {
                default: Mine,
                footer: zfFooter
            },
            meta: {
                path: 'mine',
                icon: '&#xe60e',
                title: '我的',
                isTab: true
            }
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
            meta: {

            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail,
            meta: {

            }
        }
    ]
