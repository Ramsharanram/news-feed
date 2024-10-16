export interface User{
    username: string;
    password: string;
}

export interface LoginResponce{
    accessToken: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
    firstName:string;
    lastName: string;
    gender: string;
    image: string;
}