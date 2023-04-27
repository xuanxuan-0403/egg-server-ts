import path from 'path';

export function getExtName(filename: string): string {
    const extensionName = path.extname(filename);
    return extensionName;
}
