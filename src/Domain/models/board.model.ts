export class Board {
    board_Id: number;
    board_name:string;
    board_color:string;
    user_Id: number;
}

export type BoardData = Omit<Board, "board_Id">;
