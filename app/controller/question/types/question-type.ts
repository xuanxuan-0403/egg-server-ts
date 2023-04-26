// single: 单选
// multiple: 多选
type optionType = 'single' | 'multiple';

interface ITopicOption {
    id: number;
    content: string;
    contentImg: string;
    create_time: string;
}

export interface IDataType {
    titleId: number;
    type: optionType;
    numberOptions: number;
    content: string;
    correct: number[];
    data: ITopicOption[];
}
