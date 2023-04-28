import path from 'path';

export function alternatePath(_dirname: string, targetPathName: string[]): string {
    const arr = _dirname.split(path.sep);
    let newArr: string[] = [];

    arr.map((item: string, index: number) => {
        newArr.push(item);
        if (index === arr.length - 1) {
            newArr = arr.slice(0, arr.length - targetPathName.length);
            return newArr.push(...targetPathName);
        }
    });

    return path.join(...newArr);
}
