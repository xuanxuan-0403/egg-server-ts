import { Service } from 'egg';
import { IUserInfo } from './types/user-type';

export default class UserService extends Service {
    async addUser(userInfo: IUserInfo) {
        // 增
        const { app } = this;
        if (!userInfo.username && !userInfo.password) return;

        const res = await app.mysql.insert('user', userInfo);
        return res.affectedRows;
    }
    async delUser() {
        // 删
    }
    async updateUser() {
        // 改
    }
    async getUser() {
        // 查;
        const { app } = this;
        const data = await app.mysql.select('user');
        console.log(data);
        return data;
    }
    async returnToken(name: any) {
        const { app } = this;
        const token = this.app.jwt.sign(
            {
                name,
                expiresIn: 60 * 60 * 24,
            },
            app.config.jwt.secret,
        );
        return token;
    }
}
