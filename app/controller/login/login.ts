import { Controller } from 'egg';
import type { IUserInfo } from './types/login-type';
import { adminRouter, userRouter } from './types/router-data';

export default class LoginController extends Controller {
    async getUser() {
        const { ctx, app } = this;
        const user: IUserInfo = {
            username: ctx.request.body.username,
            password: ctx.request.body.password,
        };
        const sqlUser = await app.mysql.select('user');

        let resultUser = false;

        // * 判断有无传参
        if (user.username && user.password) {
            for (let i = 0; i < sqlUser.length; i++) {
                if (sqlUser[i].username !== user.username) continue;
                resultUser = true;
                const userid = sqlUser[i].id;
                const token = app.jwt.sign({ name: sqlUser[i].username }, app.config.jwt.secret);

                if (sqlUser[i].role === '超级管理员') {
                    ctx.body = {
                        status: 200,
                        message: '超级管理员登录成功',
                        token,
                        userid,
                        username: 'admin',
                        router: adminRouter,
                        role: '超级管理员',
                    };
                    return;
                }

                ctx.body = {
                    status: 200,
                    message: '登录成功',
                    token,
                    userid,
                    router: userRouter,
                    username: user.username,
                    role: '普通用户',
                };
            }
            if (!resultUser) {
                ctx.body = {
                    status: 200,
                    message: '用户名或密码错误',
                };
            }
        }
    }

    async addUser() {
        // 注册
        const { ctx } = this;
        const user: IUserInfo = {
            username: ctx.request.body.username,
            password: ctx.request.body.password,
        };

        if (!user.username && !user.password) return;

        // const res = await this.service.user.addUser(user);

        const result = await this.app.mysql.insert('user', {
            username: user.username,
            password: user.password,
            role: '普通用户',
        });

        if (result.affectedRows === 1) {
            ctx.body = { status: 200, message: '注册成功' };
        } else {
            ctx.body = { status: 200, message: '注册失败' };
        }
    }
}
