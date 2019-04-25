import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {

    private dataStore;
    public map;
    public currentMarkers = [];

    constructor(private http: HttpClient) {
        this.dataStore = {
            groups: [
                {
                    id: 1, name: "IT-companies on letter D", displayed: true, coords: [{
                        'lat': 46.480280090739974, 'lon': 30.755453109741214
                    }, {
                        'lat': 46.473032057052954, 'lon': 30.74105501174927
                    }]
                },
                {
                    id: 2, name: "Girls", displayed: true, coords: [{
                        'lat': 46.47150992121362, 'lon': 30.738694667816166
                    }, {
                        'lat': 46.47996979715261, 'lon': 30.73859810829163
                    }, {
                        'lat': 46.48533319437108, 'lon': 30.738501548767093
                    }]
                },
                {
                    id: 3, name: "Cemistries...", displayed: true, coords: [{
                        'lat': 46.45092735308209, 'lon': 30.72532653808594
                    }]
                }]
        };
    }

    get groups() {
        return this.dataStore.groups;
    }

    groupByName(name: string) {
        return this.groups.find(marker => marker.name == name);
    }

  
    addGroup(user: User) {
        user.id = this.groups.length + 1;
        user.coords = this.currentMarkers;
        user.displayed = true;
        this.groups.push(user);
        this.currentMarkers = [];
    }

    refreshMap(name?: string) {
        document.getElementsByClassName('leaflet-marker-pane')[0].innerHTML=''; //TODO

        if (name) {
            let group = this.groupByName(name);
            group.displayed = !group.displayed;
        }

        this.groups.forEach(el => {
            if (el.displayed)
                el.coords.forEach(coord => window['DG'].marker([coord.lat, coord.lon]).addTo(this.map))
        });
        console.dir(this.groups);

    }

    //    const groupsUrl = "https://";

    //    this.http.post<User[]>(groupsUrl, user)
    //        .subscribe(data => {
    //            console.log(data)
    //        },
    //        error => {
    //            console.log("Failed to post user")
    //        })
    //}

   
}
