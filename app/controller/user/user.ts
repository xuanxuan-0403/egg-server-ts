import { Controller } from 'egg';
import _ from 'lodash';
import type { ISqlUserInfo } from './types/login-type';
import { userTableName } from 'config/config.mysql';

export default class UserController extends Controller {
    async getAllUser() {
        const { ctx, app } = this;
        const sqlUser: ISqlUserInfo[] = await app.mysql.select(userTableName);
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
    async deleteUser() {
        const { ctx, app } = this;
        const { id } = ctx.request.body;
        if (id) {
            const result = await app.mysql.delete(userTableName, { id });
            if (result.affectedRows === 1) {
                ctx.body = {
                    code: 0,
                    message: `user ${id} 删除成功`,
                };
            } else {
                ctx.body = {
                    code: 1,
                    message: `user ${id} 删除失败`,
                };
            }
        } else {
            ctx.body = {
                code: 2,
                message: '你没有传入id',
            }
        }
    }

    async updateUser() {}
}
