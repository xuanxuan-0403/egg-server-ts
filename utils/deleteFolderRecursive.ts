import fs from 'fs';
import path from 'path';

export function deleteFolderRecursive(folderPath: string) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file: any) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // 递归删除子文件夹
                deleteFolderRecursive(curPath);
            } else {
                // 删除文件
                fs.unlinkSync(curPath);
            }
        });
        // 删除空文件夹
        fs.rmdirSync(folderPath);

        console.log(`Deleted folder: ${folderPath}`);
        return `Deleted folder: ${folderPath}`;
    }
}
