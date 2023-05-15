import { Controller } from 'egg';
import fs from 'fs';
import path from 'path';
import { xrCompressing } from 'utils/XrCompressing';
import { v4 as uuidv4 } from 'uuid';
import { alternatePath } from 'utils/alternatePath';

export default class UploadController extends Controller {
    async uploadZip() {
        const { ctx, service } = this;
        const userData = ctx.request.body;
        const file = ctx.request.files[0];
        const name = file.filename;
        const uuid = uuidv4();
        const filename = `${uuid}_${name}`;
        const dist = `app/public/upload/${filename}`;
        const resultPath = `app/public/webgl/${uuid}`;

        const result = await new Promise((resolve, reject) => {
            fs.copyFile(file.filepath, dist, (error) => {
                if (error) {
                    reject(error);
                    console.log('error: ', error);
                } else {
                    resolve(true);
                    console.log('success', name);
                    let filepath = '';
                    if (path.extname(name) === '.zip') {
                        // * 解压
                        xrCompressing.uncompress(name, dist, resultPath);
                        // * 查询解压后文件夹路径
                        // filepath = `/${alternatePath(__dirname, ['public', 'webgl'])}/${uuid}`;
                        filepath = `${alternatePath(__dirname, ['public', 'webgl'])}\\${uuid}`;
                    }
                    // * 查询解压后 .html 文件,把路径注入到数据库
                    setTimeout(() => {
                        service.upload.upload.addPath(
                            filepath,
                            userData.userId,
                            userData.desc,
                            userData.projectName,
                        );
                    }, 1000);
                }
            });
        });
        this.ctx.response.body = {
            state: result,
            filename: name,
            extname: path.extname(name),
        };
    }

    async uploadImage() {
        const { app, ctx } = this;
        const { projectName } = ctx.request.body;
        const file = ctx.request.files[0];
        const { filename, filepath } = file;
        console.log(projectName);

        // E:\I_Project\egg-server-ts
        const targetPath = path.join(this.config.baseDir, 'app/public/upload', filename);

        fs.copyFileSync(filepath, targetPath);
        fs.unlinkSync(filepath);

        // 查找 name 字段等于请求参数中的 name 的数据
        const uploadFile = await app.mysql.get('uploadfile', { name: projectName });
        console.log(uploadFile);

        if (uploadFile) {
            const result = await app.mysql.update('uploadfile', {
                id: uploadFile.id,
                imgpath: 'fdafdafda',
            });
            if (result.affectedRows === 1) {
                console.log('添加成功');
                ctx.body = {
                    code: 0,
                    message: '添加成功',
                };
            } else {
                console.log('添加失败');
                ctx.body = {
                    code: 1,
                    message: '添加失败',
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
