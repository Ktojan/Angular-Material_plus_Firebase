import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Group } from "../../models/group";
import { MarkersService } from "../../services/markers.service";
import { AboutDialogComponent } from "../about-dialog/about-dialog.component";


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html'
})
export class MainContentComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private service: MarkersService,
                private dialog: MatDialog) { }

    ngOnInit() {

        const DG = window['DG'];
        const map = DG.map('map', {
            'center': [46.473032057052954, 30.74105501174927], // Some casual place in Odessa
            'zoom': 18
        });
        this.service.map = map;
        this.service.refreshMap();

        //Adding markers with rigth-mouse click
      map.on('contextmenu', (e) => {
          DG.marker([e.latlng.lat, e.latlng.lng]).addTo(map).bindPopup('contextmenu');
          this.service.currentMarkers.push({ 'lat': e.latlng.lat, 'lon': e.latlng.lng });
      });

        // Opens dialogue with explanations
          this.dialog.open(AboutDialogComponent, {
              width: '67%'
          });
    }
    


}
