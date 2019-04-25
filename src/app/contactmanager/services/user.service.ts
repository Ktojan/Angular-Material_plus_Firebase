import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {


    private dataStore; //: {
    //    users: [{ id: 1, name: "Stadiums", notes: [46.477225, 30.75304] }];
    //}

    constructor(private http: HttpClient) {
        this.dataStore = {
            users: [
                {
                    id: 1, name: "Stadiums", notes: [46.477225, 30.75304]
                },
                {
                    id: 2, name: "Chemisries", notes: [46.477225, 30.75304]
                }]
        };
    }

    get users() {
        return this.dataStore.users;
    }

    userById(id: number) {
        return this.dataStore.users.find(user => user.id == id);
    }

    loadAll() {
        //const usersUrl = "https://angular-material-api.azurewebsites.net/users";

        //return this.http.get<User[]>(usersUrl)
        //    .subscribe(data => {
        //        this.dataStore.users = data;
        //        this._users.next(Object.assign({}, this.dataStore).users)             
        //    },
        //    error => {
        //        console.log("Failed to fetch users")
        //    })
        return this.dataStore.users;
    }

    addUser(user: User) {
        user.id = this.dataStore.users.length + 1;
        this.dataStore.users.push(user);
        //return new Promise((resolver, reject) => {
        //    user.id = this.dataStore.users.length + 1;
        //    this.dataStore.users.push(user);
        //    this._users.next(Object.assign({}, this.dataStore).users);
        //    resolver(user);
        //}); 
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
