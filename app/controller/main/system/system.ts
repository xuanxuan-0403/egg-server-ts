import { Controller } from 'egg';

export default class SystemController extends Controller {
    async table() {
        const { ctx, app } = this;
        const userid = ctx.request.body.userId;
        const data = await app.mysql.select('uploadfile', {
            where: { userid },
            columns: ['id', 'userid', 'createTime', 'desc', 'name', 'htmlpath'],
        });
        ctx.body = {
            code: 0,
            status: 200,
            message: 'egg-ts! 7001/main/system table data',
            data,
        };
    }
    async all() {
        const { ctx, app } = this;
        const data = await app.mysql.select('uploadfile', {
            columns: ['id', 'userid', 'imgpath', 'createTime', 'desc', 'name', 'htmlpath'],
        });

        ctx.body = {
            code: 0,
            status: 200,
            message: 'egg-ts! 7001/main/system table data',
            data,
        };
    }
}
