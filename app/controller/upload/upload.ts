import { Controller } from 'egg';
import fs from 'fs';
import path from 'path';
import { xrCompressing } from 'utils/XrCompressing';
import { v4 as uuidv4 } from 'uuid';
import { alternatePath } from 'utils/alternatePath';

export default class UploadController extends Controller {
    async uploadZip() {
        const { ctx, service } = this;
        const { userId, desc, projectName } = ctx.request.body;
        const file = ctx.request.files[0];
        const uuid = uuidv4();
        const { filepath, filename } = file;
        const uuidFilename = `${uuid}_${filename}`;
        const extname = path.extname(filename);
        const decompressPath = `app/public/webgl/${uuid}`;
        const targetPath = path.join(this.config.baseDir, 'app/public/upload', uuidFilename);

        const stream = fs.createReadStream(filepath);
        const writeStream = fs.createWriteStream(targetPath);

        stream.pipe(writeStream);

        writeStream.on('finish', () => {
            if (extname === '.zip' || extname === '.rar' || extname === '.7z') {
                xrCompressing
                    .uncompress(filename, `app/public/upload/${uuidFilename}`, decompressPath)
                    .then(() => {
                        console.log('解压完毕');
                        const uuidFilepath = `/${alternatePath(__dirname, [
                            'public',
                            'webgl',
                        ])}/${uuid}`;
                        // const uuidFilepath = `${alternatePath(__dirname, ['public', 'webgl'])}\\${uuid}`;
                        service.upload.upload.addPath(uuidFilepath, userId, desc, projectName);
                    });
            } else {
                ctx.body = {
                    code: 1,
                    message: '传入文件不为压缩包',
                };
                return;
            }
        });

        writeStream.on('error', (err) => {
            // 处理写入流错误
            console.error(err);
            ctx.body = {
                code: 1,
                message: '文件上传失败',
            };
        });

        this.ctx.response.body = {
            code: 0,
            filename,
            extname: path.extname(filename),
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
        fs.copyFileSync(targetPath, `${uploadFile.filepath}/${filename}`);

        if (uploadFile) {
            const result = await app.mysql.update('uploadfile', {
                id: uploadFile.id,
                imgpath: `${uploadFile.filepath}/${filename}`,
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
        this.ctx.response.body = {
            code: 0,
            filename,
            extname: path.extname(filename),
        };
    }
}
