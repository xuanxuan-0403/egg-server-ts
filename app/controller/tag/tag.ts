import { Controller } from 'egg';
import { tagTableName } from 'config/config.mysql';

export default class TagController extends Controller {

    async add() {
        const { ctx, app } = this;
        const { tag }: { tag: string | string[] } = ctx.request.body;
        if (tag) {
            if (typeof tag === 'string') {
                await app.mysql.insert(tagTableName, { tag });
                ctx.body = { code: 0, message: `单个tag:${tag}添加成功` };
            } else if (Array.isArray(tag)) {
                for (const item of tag) {
                    console.log(item);
                }
            }
        } else {
            ctx.body = {
                code: 1,
                message: '你没传tag用这个接口干嘛',
            };
        }
    }

    async del() {
        const { ctx, app } = this;
        const { id }: { id: number } = ctx.request.body;
        if (id) {
            const result = await app.mysql.delete(tagTableName, { id });
            if (result.affectedRows === 1) {
                ctx.body = { code: 0, message: `tag ${id} 删除成功` };
            } else {
                ctx.body = { code: 1, message: `tag ${id} 删除失败` };
            }
        } else {
            ctx.body = { code: 2, message: '没传id你来干什么' };
        }
    }

    async update() {
        const { ctx, app } = this;
        const { id, tag }: { id: number; tag: string } = ctx.request.body;
        if (id && tag) {
            const result = await app.mysql.update(tagTableName, { id, tag });

            if (result.affectedRows === 1) {
                ctx.body = {
                    code: 0, message: `user ${id}, tag: ${tag} 修改成功`,
                };
            } else {
                ctx.body = {
                    code: 1, message: `user ${id}, tag: ${tag} 修改失败`,
                };
            }
        } else {
            ctx.body = { code: 2, message: '没传id和tag你来干什么' };
        }
    }

    async get() {
        const { ctx, app } = this;
        const data = await app.mysql.select(tagTableName);
        ctx.body = {
            code: 0,
            message: '返回全部 tag',
            data,
        };
    }
}
