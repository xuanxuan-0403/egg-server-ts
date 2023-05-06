import { Service } from 'egg';
import dayjs from 'dayjs';
import fs from 'fs';
import { getExtName } from 'utils/getExtName';

export default class UploadService extends Service {
    async addPath(filepath: string) {
        const { app } = this;
        let htmlpath = '';
        let createTime = dayjs().format('YYYY-MM-DD HH:mm');
        const files = await fs.promises.readdir(filepath);
        files.forEach((file) => {
            const extName = getExtName(file);
            if (extName !== '.html') return;
            htmlpath = `${filepath}\\${file}`;
            app.mysql.insert('uploadfile', {
                htmlpath,
                filepath,
                createTime,
            });
        });
    }
}
