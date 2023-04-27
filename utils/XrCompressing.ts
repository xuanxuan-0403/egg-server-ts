import compressing from 'compressing';
import { getExtName } from 'utils/getExtName';

enum RarExtName {
    RAR = '.rar',
    ZIP = '.zip',
    SEVENz = '.7z',
}

class XrCompressing {
    // 解压
    async uncompress(filename: string, filepath: string, targetpath: string) {
        const extname = getExtName(filename);
        // 判断扩展名
        if (
            extname === RarExtName.ZIP ||
            extname === RarExtName.RAR ||
            extname === RarExtName.SEVENz
        ) {
            console.log('开始解压', extname);

            // compressing.zip
            //     .uncompress(filepath, targetpath, {
            //         // 在解压时设置一下编码
            //         zipFileNameEncoding: 'GBK',
            //     })
            //     .then((res) => {
            //         console.log('解压成功: ', res);
            //     })
            //     .catch((err) => {
            //         console.log('解压失败: ', err);
            //     });
            const res = await compressing.zip.uncompress(filepath, targetpath, {
                zipFileNameEncoding: 'GBK',
            });
            return res;
        }
    }
}

export const xrCompressing = new XrCompressing();
