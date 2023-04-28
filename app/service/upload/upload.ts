import { Service } from 'egg';
import dayjs from 'dayjs';

export default class UploadService extends Service {
    async addPath(filepath: string) {
        const { app } = this;
        let createTime = dayjs().format('YYYY-MM-DD HH:mm');
        const res = await app.mysql.insert('uploadfile', {
            filepath,
            createTime,
        });
        return res;
    }
}
