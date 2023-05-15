import { Service } from 'egg';
import dayjs from 'dayjs';
import fs from 'fs';
import path from 'path';

export default class UploadService extends Service {
    async addPath(
        filepath: string,
        userid: number,
        desc: string,
        projectName: string,
        htmlpath: string = '',
    ) {
        let flag = false;
        const { app, service } = this;
        const files = fs.readdirSync(filepath);
        const createTime = dayjs().format('YYYY-MM-DD HH:mm');
        files.forEach((file) => {
            const extName = path.extname(file);
            const filePath = path.join(filepath, file);
            if (extName == '.html') {
                flag = true;
                htmlpath = `${filepath}/${file}`;
                app.mysql.insert('uploadfile', {
                    htmlpath,
                    filepath,
                    createTime,
                    userid,
                    desc,
                    name: projectName,
                });
            }

            if (fs.statSync(filePath).isDirectory() && flag !== true) {
                service.upload.upload.addPath(filePath, userid, desc, projectName);
            }
        });
    }
}
