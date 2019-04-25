import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../../models/user";
import { MarkersService } from "../../services/markers.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private service: MarkersService) { }

    ngOnInit() {

        const DG = window['DG'];
        const map = DG.map('map', {
            'center': [46.473025, 30.74104], // Odessa
            'zoom': 13
        });
        this.service.map = map;
        this.service.refreshMap();

        //Adding markers with rigth-mouse click
      map.on('contextmenu', (e) => {
          DG.marker([e.latlng.lat, e.latlng.lng]).addTo(map).bindPopup('contextmenu');
          this.service.currentMarkers.push({ 'lat': e.latlng.lat, 'lon': e.latlng.lng });
          console.dir(this.service.currentMarkers);
      });
    }
    


}
