import fs from 'fs';
import path from 'path';

export const readDir = (entry) => {
    console.log(entry);
    const dirInfo = fs.readdirSync(entry);
    dirInfo.forEach((item) => {
        const location = path.join(entry, item);
        const info = fs.statSync(location);
        if (info.isDirectory()) {
            console.log(`dir:${location}`);
            readDir(location);
        } else {
            console.log(`file:${location}`);
        }
    });
};

// export function getPath(path: string) {
//     const dirInfo = fs.readdirSync(path)
// }
