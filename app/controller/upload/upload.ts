import { Controller } from 'egg';
import fs from 'fs';
import path from 'path';
import { xrCompressing } from 'utils/XrCompressing';
import { readDir } from 'utils/readDir';

export default class UploadController extends Controller {
    async index() {
        const file = this.ctx.request.files[0];
        const name = file.filename;
        const dist = 'app/public/upload/' + name;
        const resultPath = 'app/public/lib';
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
                    // 查询 .html 的路径并存储到数据库
                    readDir(__dirname);
                    console.log(__dirname.split(path.sep));
                }
            });
        });
        this.ctx.response.body = {
            state: result,
            filename: name,
        };
    }
}
