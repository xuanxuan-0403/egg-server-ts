// app/controller/dangjian.ts
import { Controller } from 'egg';

export default class DangJianController extends Controller {
    public async exhibits() {
        const { ctx, app } = this;
        const videoInfo = await app.mysql.select('dangjian');
        ctx.body = {
            code: 0,
            status: 200,
            message: 'hi egg! 党建展厅弹窗接口',
            data: {
                museumName: '党建展馆',
                videoInfo,
            },
        };
    }
}
