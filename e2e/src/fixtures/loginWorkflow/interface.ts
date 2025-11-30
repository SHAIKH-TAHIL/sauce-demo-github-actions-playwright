export interface UserData {
    userName: string;
    password: string;
    email?: string;
}

export interface LoginData {
    validCreds: UserData;
    invalidCreds: UserData;
}