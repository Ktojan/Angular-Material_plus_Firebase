import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private _users: BehaviorSubject<User[]>;

    private dataStore: {
        users: User[]
    }

    constructor(private http: HttpClient) {
        this.dataStore = { users: [] };
        this._users = new BehaviorSubject<User[]>([]);
    }

    get users(): Observable<User[]> {
        return this._users.asObservable();
    }

    userById(id: number) {
        return this.dataStore.users.find(user => user.id == id);
    }

    loadAll() {
        const usersUrl = "https://angular-material-api.azurewebsites.net/users";

        return this.http.get<User[]>(usersUrl)
            .subscribe(data => {
                this.dataStore.users = data;
                this._users.next(Object.assign({}, this.dataStore).users)             
            },
            error => {
                console.log("Failed to fetch users")
            })
    }

    addUser(user: User): Promise<User> {
        return new Promise((resolver, reject) => {
            user.id = this.dataStore.users.length + 1;
            this.dataStore.users.push(user);
            this._users.next(Object.assign({}, this.dataStore).users);
            resolver(user);
        }); 
    }
    //    const usersUrl = "https://angular-material-api.azurewebsites.net/users";

    //    this.http.post<User[]>(usersUrl, user)
    //        .subscribe(data => {
    //            console.log(data)
    //        },
    //        error => {
    //            console.log("Failed to post user")
    //        })
    //}

   
}
