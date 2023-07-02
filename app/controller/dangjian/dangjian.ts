// app/controller/dangjian.ts
import { Controller } from 'egg';
import data from './data/exhibits.json';

export default class DangJianController extends Controller {
    public async exhibits() {
        const { ctx } = this;
        ctx.body = {
            code: 0,
            status: 200,
            message: 'hi egg! 现在是航海接口',
            data,
        };
    }
}
