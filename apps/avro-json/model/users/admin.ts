import { User } from "./user";

export type Admin = Pick<User, 'name' | 'age' | 'phone' | 'email' | 'type' | 'password' | 'username'>;