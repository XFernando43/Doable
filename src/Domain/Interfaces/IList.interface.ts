export interface IListUpdateDto{
    list_name:string;
    orderList:number;
    list_id:number
}

export interface IListCreateDto{
    list_name:string;
    board_id:number
}