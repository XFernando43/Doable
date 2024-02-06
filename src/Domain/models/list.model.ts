export class List {
    list_Id: number;
    list_name:string;
    orderList:number;
    board_id:number
}

export type ListData = Omit<List, "list_Id">;
