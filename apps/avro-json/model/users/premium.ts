import { User } from "./user";

export type Premium = Pick<User, 'name' | 'age' | 'phone' | 'email' | 'address1' | 'address2' | 'type'>;