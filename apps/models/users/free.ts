import { User } from "./user";

export type Free = Pick<User, 'name' | 'email' | 'type'>;