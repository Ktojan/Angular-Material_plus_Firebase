import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {


    private dataStore;
    public map;
    public currentMarkers = [];

    constructor(private http: HttpClient) {
        this.dataStore = {
            users: [
                {
                    id: 1, name: "Stadiums", displayed: false, notes: [{
                        'lat': 46.480280090739974, 'lon': 30.755453109741214
                    }, {
                            'lat': 46.46845813229578, 'lon': 30.74854373931885
                        }]
                },
                {
                    id: 2, name: "Girls", displayed: false, notes: [{
                        'lat': 46.47150992121362, 'lon': 30.738694667816166
                    }, {
                        'lat': 46.47996979715261, 'lon': 30.73859810829163
                    }]
                },
                {
                    id: 3, name: "Chemisries", displayed: false, notes: [{
                        'lat': 46.45092735308209, 'lon': 30.72532653808594
                    }]
                }]
        };
    }

    get users() {
        return this.dataStore.users;
    }

    userByName(name: string) {
        return this.dataStore.users.find(user => user.name == name);
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
        user.notes = this.currentMarkers;
        user.displayed = true;
        this.dataStore.users.push(user);
    }

    refreshMap(group) {
        
        //curGroup.displayed = !curGroup.displayed
        let user = this.userByName(group);
        let markers = user.notes;

        console.dir(user);
        markers.forEach(el => {
            if (user.displayed) {
                console.log(1, user);
                window.DG.marker([el.lat, el.lon]).remove();
            }
            else {
                console.log(2, user);
                window.DG.marker([el.lat, el.lon]).addTo(this.map);
            }
        });
        user.displayed = !user.displayed;
        console.dir(user);

    }


    //    const usersUrl = "https://";

    //    this.http.post<User[]>(usersUrl, user)
    //        .subscribe(data => {
    //            console.log(data)
    //        },
    //        error => {
    //            console.log("Failed to post user")
    //        })
    //}

   
}
