export interface IItem {
    id:number,
    parentId?:number,
    name:string,
    children?:IItem[]
}
