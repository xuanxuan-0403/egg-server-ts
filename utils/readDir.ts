import fs from 'fs';

export function readDir(filepath: string) {
    fs.readdir(filepath, (err, fileArr) => {
        if (err) {
            console.log('读取错误:', err);
            return;
        }
        fileArr.forEach((file) => {
            console.log(file);
        });
    });
}
