import { Controller } from 'egg';
import fs from 'fs';
import { xrCompressing } from 'utils/XrCompressing';

export default class UploadController extends Controller {
    async index() {
        const file = this.ctx.request.files[0];
        const name = file.filename;
        const dist = 'app/public/upload/' + name;
        const result = await new Promise((resolve, reject) => {
            fs.copyFile(file.filepath, dist, (error) => {
                if (error) {
                    reject(error);
                    console.log('error: ', error);
                } else {
                    resolve(true);
                    console.log('success', name);
                    // 解压
                    xrCompressing.uncompress(name, `app/public/upload/${name}`, 'app/public/lib');
                }
            });
        });
        this.ctx.response.body = {
            state: result,
            filename: name,
        };
    }
}
