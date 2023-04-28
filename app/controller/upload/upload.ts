import { Controller } from 'egg';
import fs from 'fs';
// import path from 'path';
import { xrCompressing } from 'utils/XrCompressing';
// import { readDir } from 'utils/readDir';
import { v4 as uuidv4 } from 'uuid';
import { alternatePath } from 'utils/alternatePath';

export default class UploadController extends Controller {
    async index() {
        const file = this.ctx.request.files[0];
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
                    // 解压
                    xrCompressing.uncompress(name, dist, resultPath);
                    // 查询解压后文件夹路径
                    const filepath = `${alternatePath(__dirname, ['public', 'webgl'])}\\${uuid}`;
                    // 把路径注入到数据库
                    this.service.upload.upload.addPath(filepath);
                }
            });
        });
        this.ctx.response.body = {
            state: result,
            filename: name,
        };
    }
}
