import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
const path = require('path');

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1682509625812_8151';

    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    // * mysql
    config.mysql = {
        app: true, // 是否挂载到 app/ 下面
        agent: false, // 是否挂载到代理
        client: {
            host: '10.87.1.106',
            port: '3306',
            user: 'root',
            password: '316516',
            database: 'jiawu',
        },
    };
    // * 配置白名单
    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['*'], // 允许访问域名的白名单,*表示都能访问
    };
    // * jwt鉴权配置
    config.jwt = {
        secret: '123456', // token的加密的密钥,自己随便设置
    };
    config.static = {
        prefix: '/',
    };
    // 上传文件配置
    config.multipart = {
        mode: 'file',
        whitelist: ['.zip', '.7z', '.rar', '.jpg', '.png', '.jpeg', '.gif', '.txt'],
        fileSize: '1024mb',
    };
    config.security = {
        csrf: {
            enable: false,
        },
    };
    // * 配置跨域
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        domainWhiteList: ['*'],
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    config.kstatic = {
        root: path.join(appInfo.baseDir, '../build'),
        options: {},
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
