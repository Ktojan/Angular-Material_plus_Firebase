import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

    user: User;
    map: any;

    constructor(private route: ActivatedRoute,
        private service: UserService) {

  }

    ngOnInit() {

      this.route.params.subscribe(params => {
          let id = params['id'];
          if (!id) id = 1;
          this.user = null;
          this.service.users.subscribe(users => {
              if (users.length == 0) return;
              this.user = this.service.userById(id);
          })
      })
      var myIcon = window.DG.icon({
          iconUrl: '../../assets/golf_marker.png',
          //iconRetinaUrl: 'my-icon@2x.png',
          iconSize: [28, 35],
          //iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          //shadowUrl: 'my-icon-shadow.png',
          //shadowRetinaUrl: 'my-icon-shadow@2x.png',
          //shadowSize: [68, 95],
          //shadowAnchor: [22, 94]
      });

      this.map = window.DG.map('map', {
          'center': [46.473025, 30.74104], // Географическая точка с определенной широтой и долготой.
          'zoom': 13
      });

      this.map.on('click', function (e) {
          console.dir(e.latlng.lat + ', long: ' + e.latlng.lng);
      });

        //Adding markers with rigth-mouse click
      this.map.on('contextmenu', function(e) {
          console.log(this);
          console.log(e);
          window.DG.marker([e.latlng.lat, e.latlng.lng], { icon: myIcon }).addTo(this).bindPopup('contextmenu');
      });


      //let m1 = window.DG.marker([46.473027, 30.74107], { icon: myIcon }).addTo(this.map);
     // let m2 = window.DG.marker([46.473038, 30.74159], { icon: myIcon }).addTo(this.map);
    }
    


}
