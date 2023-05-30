import { Controller } from 'egg';
import _ from 'lodash';
import type { ISqlUserInfo } from './types/login-type';

export default class UserController extends Controller {
    async getAllUser() {
        const { ctx, app } = this;
        const sqlUser: ISqlUserInfo[] = await app.mysql.select('user');
        const allUser = sqlUser.map((item) => {
            if (item.role !== '超级管理员') {
                return item;
            }
        });
        const data = _.pull(allUser, undefined);

        ctx.body = {
            code: 0,
            message: '全部用户',
            data,
        };
    }
}
