export class User {
    user_id: number;
    name: string;
    username:string;
    mail:string;
    password:string;
    role:string;
}

export type UserData = Omit<User, "user_id">;
