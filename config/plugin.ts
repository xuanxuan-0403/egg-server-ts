import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    tegg: {
        enable: true,
        package: '@eggjs/tegg-plugin',
    },
    teggConfig: {
        enable: true,
        package: '@eggjs/tegg-config',
    },
    teggController: {
        enable: true,
        package: '@eggjs/tegg-controller-plugin',
    },
    teggSchedule: {
        enable: true,
        package: '@eggjs/tegg-schedule-plugin',
    },
    eventbusModule: {
        enable: true,
        package: '@eggjs/tegg-eventbus-plugin',
    },
    aopModule: {
        enable: true,
        package: '@eggjs/tegg-aop-plugin',
    },
    tracer: {
        enable: true,
        package: 'egg-tracer',
    },
    // * 自己的插件
    // mysql
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    // 生成登录后token
    jwt: {
        enable: true,
        package: 'egg-jwt',
    },
    // 跨域
    cors: {
        enable: true,
        package: 'egg-cors',
    },
};

export default plugin;
