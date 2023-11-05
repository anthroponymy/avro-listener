import { User } from "./user";

export type Trial = Pick<User, 'email' | 'type'>;