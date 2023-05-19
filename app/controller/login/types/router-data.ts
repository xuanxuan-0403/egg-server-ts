import { IRouterType } from './router-type';

const userRouter: IRouterType[] = [
    {
        id: 1,
        name: '核心技术',
        type: 1,
        url: '/main/overview',
        icon: '',
        sort: 2,
    },
    {
        id: 2,
        name: '上传项目',
        type: 1,
        url: '/main/upload',
        icon: '',
        sort: 2,
    },
    {
        id: 3,
        name: '项目管理',
        type: 1,
        url: '/main/system',
        icon: '',
        sort: 2,
    },
];

const adminRouter: IRouterType[] = [
    {
        id: 1,
        name: '核心技术',
        type: 1,
        url: '/main/overview',
        icon: '',
        sort: 2,
    },
    {
        id: 4,
        name: '系统总览',
        type: 1,
        url: '/main/dashboard',
        icon: '',
        sort: 2,
    },
    {
        id: 5,
        name: '用户管理',
        type: 1,
        url: '/main/user',
        icon: '',
        sort: 2,
    },
    {
        id: 6,
        name: '项目管理',
        type: 1,
        url: '/main/allsystem',
        icon: '',
        sort: 2,
    },
];

export { userRouter, adminRouter };
