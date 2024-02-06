export interface IUserUpdateDto{
    name:string,
    username:string,
    mail:string,
    password:string
}

export interface IUserDto{
    name: string;
    username:string;
    mail:string;
    password:string;
}

export interface IUserLoginDto{
    username:string,
    password:string
}