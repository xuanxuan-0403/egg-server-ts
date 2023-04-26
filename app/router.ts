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
};
