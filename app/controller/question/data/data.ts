import { IDataType } from '../types/type';

export const questions: IDataType[] = [
    {
        titleId: 2,
        type: 'single',
        numberOptions: 4,
        content: '1+1=?',
        correct: [1],
        data: [
            {
                id: 1,
                content: '2',
                contentImg: '',
                create_time: '2023-3-2',
            },
            {
                id: 2,
                content: '0',
                contentImg: '',
                create_time: '2023-3-2',
            },
            {
                id: 3,
                content: '3.1415924',
                contentImg: '',
                create_time: '2023-3-2',
            },
            {
                id: 4,
                content: '114514',
                contentImg: '',
                create_time: '2023-3-2',
            },
        ],
    },
    {
        titleId: 6,
        type: 'multiple',
        numberOptions: 4,
        correct: [2, 3, 4],
        content: '1+1不等于?',
        data: [
            {
                id: 1,
                content: '2',
                contentImg: '',
                create_time: '2023-3-2',
            },
            {
                id: 2,
                content: '3.1415926535',
                contentImg: '',
                create_time: '2023-3-2',
            },
            {
                id: 3,
                content: '233333333',
                contentImg: '',
                create_time: '2023-3-2',
            },
            {
                id: 4,
                content: '114514',
                contentImg: '',
                create_time: '2023-3-2',
            },
        ],
    },
];
