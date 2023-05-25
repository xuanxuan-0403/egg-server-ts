// app/router.ts
import { Application } from 'egg';

export default (app: Application) => {
    const { router, controller } = app;
    router.get('/', controller.home.index);

    // * get
    router.get('/question', controller.question.question.index);
    router.get('/dangjian/exhibits', controller.dangjian.dangjian.exhibits); // 党建展厅

    // * 登录
    router.post('/api/login/getUser', controller.login.login.getUser);
    router.post('/api/login/addUser', controller.login.login.addUser);

    // * 文件上传功能
    router.post('/upload', controller.upload.upload.uploadZip);
    router.post('/uploadImage', app.controller.upload.upload.uploadImage);

    // * main/system
    router.post('/api/system/tableData', controller.main.system.system.table);
    router.post('/api/system/all', controller.main.system.system.all);
    router.post('/api/system/delete', controller.main.system.system.delete);
    router.post('/api/system/audit', controller.main.system.system.audit);
};
