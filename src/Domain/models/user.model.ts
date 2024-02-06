export class User {
    userId: number;
    name: string;
    mail:string;
    username:string;
    password:string;
}

export type UserData = Omit<User, "userId">;
