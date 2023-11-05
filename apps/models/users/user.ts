export enum userType { premium, trial, free };
export type User = {
    name: string;
    age: number;
    phone: number;
    email: string;
    address1: string;
    address2: string;
    type: userType;
    password: string;
    username: string
}