import { Controller } from 'egg';
import { IUserInfo } from './types/login-type';

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

                const token = this.app.jwt.sign({
                    name: sqlUser[i].name,
                    expiresIn: 60 * 60 * 24,
                });

                ctx.body = {
                    status: 200,
                    message: '登录成功',
                    token,
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
        //
    }
}
