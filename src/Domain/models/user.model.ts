export class User {
    userId: number;
    name: string;
    username:string;
    password:string;
}

export type UserData = Omit<User, "id">;
