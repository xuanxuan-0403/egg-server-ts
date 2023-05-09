import { Controller } from 'egg';

export default class SystemController extends Controller {
    async table() {
        const { ctx, app } = this;
        const userid = ctx.request.body.userId;
        console.log(userid);
        const rows = await app.mysql.select('uploadfile', {
            where: { userid },
        });
        ctx.body = {
            code: 0,
            status: 200,
            message: 'egg-ts! 7001/main/system table data',
            data: [rows],
        };
    }
}
