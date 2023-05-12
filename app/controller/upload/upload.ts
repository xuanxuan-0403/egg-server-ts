import { Controller } from 'egg';
import fs from 'fs';
import path from 'path';
import { xrCompressing } from 'utils/XrCompressing';
import { v4 as uuidv4 } from 'uuid';
import { alternatePath } from 'utils/alternatePath';

export default class UploadController extends Controller {
    async index() {
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
                        filepath = `/${alternatePath(__dirname, ['public', 'webgl'])}/${uuid}`;
                    } else if (path.extname(name) === '.png') {
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
}
