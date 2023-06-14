export interface IRouterType {
    id: number;
    name: string;
    type: number;
    url: string;
    icon: string;
    sort: number;
    childrem?: IRouterType[];
    svg: string;
}
