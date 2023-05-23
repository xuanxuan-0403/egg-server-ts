import { Controller } from 'egg';

export default class SystemController extends Controller {
    async table() {
        const { ctx, app } = this;
        const userid = ctx.request.body.userId;
        const data = await app.mysql.select('uploadfile', {
            where: { userid },
            columns: [
                'id',
                'userid',
                'imgpath',
                'createTime',
                'desc',
                'name',
                'htmlpath',
                'isAudit',
            ],
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
            columns: [
                'id',
                'userid',
                'imgpath',
                'createTime',
                'desc',
                'name',
                'htmlpath',
                'isAudit',
            ],
        });
        const auditData = data.map((item) => {
            if (item.isAudit === 1) {
                return item;
            }
        });

        ctx.body = {
            code: 0,
            status: 200,
            message: 'egg-ts! 7001/main/system table data',
            auditData,
        };
    }
    async delete() {
        const { ctx, app } = this;
        const { id } = ctx.request.body;
        const result = await app.mysql.delete('uploadfile', { id });
        if (result.affectedRows === 1) {
            console.log('删除成功');
            ctx.body = {
                code: 0,
                message: '删除成功',
            };
        } else {
            console.log('删除失败');
            ctx.body = {
                code: 1,
                message: '删除失败',
            };
        }
    }
}
