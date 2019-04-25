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

    constructor(private route: ActivatedRoute,
        private service: UserService) {

  }

    ngOnInit() {

        const DG = window.DG;
        const map = DG.map('map', {
            'center': [46.473025, 30.74104], // Географическая точка с определенной широтой и долготой.
            'zoom': 13
        });

      //this.route.params.subscribe(params => {
      //    let id = params['id'];
      //    if (!id) id = 1;
      //    this.user = null;
      //    this.service.users.subscribe(users => {
      //        if (users.length == 0) return;
      //        this.user = this.service.userById(id);
      //    })
      //})
      var myIcon = DG.icon({
          iconUrl: '../../assets/marker_image.png',
          //iconRetinaUrl: 'my-icon@2x.png',
          iconSize: [28, 35],
          //iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          //shadowUrl: 'my-icon-shadow.png',
          //shadowRetinaUrl: 'my-icon-shadow@2x.png',
          //shadowSize: [68, 95],
          //shadowAnchor: [22, 94]
      });
     

      
        //Adding markers with rigth-mouse click
      map.on('contextmenu', function(e) {
          DG.marker([e.latlng.lat, e.latlng.lng]).addTo(this).bindPopup('contextmenu');
          console.log(this._layers);
      });


      //let group = DG.featureGroup([marker1, marker2, marker3]);
      //group.addTo(map);
      //group.on('click', (e) => {
      //    console.dir(group._layers);
      //    for (let key in group._layers) {
      //        console.dir(group._layers[key]._latlng);
      //        //map.setView([e.latlng.lat, e.latlng.lng]);
      //    }
      //});
        DG.then(function () {
            var markers = DG.featureGroup(),
                coordinates = [];
      let marker1 = DG.marker([46.473025, 30.73004]).addTo(markers);
      let marker2 = DG.marker([46.473025, 30.74104]).addTo(markers);
      let marker3 = DG.marker([46.477225, 30.75304]).addTo(markers);

            document.getElementById('hide').onclick = hideMarkers;
            document.getElementById('show').onclick = showMarkers;

            function showMarkers() {
                markers.addTo(map);
                map.fitBounds(markers.getBounds());
            };

            function hideMarkers() {
                markers.removeFrom(map);
            };
        });

    }
    


}
