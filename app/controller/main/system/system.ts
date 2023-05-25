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
        const { audit } = ctx.request.body;
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
        /*
            audit = 1 返回的数据为全部数据
            audit = 0 返回的为排除未审核的数据
        */
        if (audit === 1) {
            const auditData = data.map((item) => {
                if (item.isAudit === 1) {
                    return item;
                }
            });
            ctx.body = {
                code: 0,
                status: 200,
                message: 'egg-ts! 7001/main/system table data',
                data: auditData,
            };
        } else if (audit === 0) {
            ctx.body = {
                code: 0,
                status: 200,
                message: 'egg-ts! 7001/main/system table data',
                data,
            };
        }
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
    async audit() {
        const { ctx, app } = this;
        const { id, userid } = ctx.request.body;
        const listData = await app.mysql.get('uploadfile', {
            id,
            userid,
        });

        if (listData) {
            const result = await app.mysql.update('uploadfile', {
                id: listData.id,
                isAudit: 1,
            });
            if (result.affectedRows === 1) {
                console.log('修改审核通过');
                ctx.body = {
                    code: 0,
                    message: '修改审核通过',
                };
            } else {
                console.log('修改审核失败');
                ctx.body = {
                    code: 1,
                    message: '修改审核失败',
                };
            }
        } else {
            console.log('未找到对应数据');
            ctx.body = {
                code: 2,
                message: '未找到对应数据',
            };
        }
    }
}
