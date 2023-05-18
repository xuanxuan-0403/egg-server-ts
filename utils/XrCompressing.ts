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
        return new Promise((resolve, reject) => {
            const extname = getExtName(filename);
            // 判断扩展名
            if (
                extname === RarExtName.ZIP ||
                extname === RarExtName.RAR ||
                extname === RarExtName.SEVENz
            ) {
                compressing.zip
                    .uncompress(filepath, targetpath, {
                        zipFileNameEncoding: 'GBK',
                    })
                    .then(() => {
                        resolve('');
                    })
                    .catch(reject);
            } else {
                reject(new Error('传入文件不为压缩包'));
            }
        });
    }
}

export const xrCompressing = new XrCompressing();
