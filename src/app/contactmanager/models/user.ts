import { Note } from "./note";

export class User {
    id: number;
    name: string;
    displayed: boolean;
    notes?: any[] = [];
}
