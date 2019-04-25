import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatSidenav } from '@angular/material';
import { MarkersService } from "../../services/markers.service";
import { Group } from "../../models/group";

const SMALL_SCREEN_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT}px)`);

  groups: any[];

  constructor(
      private service: MarkersService,
      private router: Router) {
  } 

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
      this.groups = this.service.groups;
     
      this.router.events.subscribe(() => {
          if (this.isScreenSmall()) {
              this.sidenav.close();
          }
      })
  }

  toggleGroup(group) {
      this.service.refreshMap(group);
  }

  isScreenSmall(): boolean {
      return this.mediaMatcher.matches;
  }

}
