import fs from 'fs';
import path from 'path';

function addPath(filepath: string, result: string[] = [], resultPath: string = '') {
    const files = fs.readdirSync(filepath);
    files.forEach((file) => {
        const extName = path.extname(file);
        const filePath = path.join(filepath, file);
        if (extName == '.html') {
            resultPath = `${filepath}\\${file}`;
            result.push(resultPath);
        }

        if (fs.statSync(filePath).isDirectory()) {
            addPath(filePath, result);
        }
    });
    return result;
}

// addPath('D:\\demo');
const result = addPath('D:\\demo');
console.log('-----------------');
console.log(result);
