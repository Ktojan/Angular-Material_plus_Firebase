import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatSidenav } from '@angular/material';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";

const SMALL_SCREEN_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT}px)`);

  users: any[];

  constructor(
      private userService: UserService,
      private router: Router) {
  } 

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
      this.users = this.userService.users;

      // TODO remove method
      //this.users.subscribe(data => {
         // if (data.length > 0) this.router.navigate(['/contactmanager', data[0].id]);
      //})

      this.router.events.subscribe(() => {
          if (this.isScreenSmall()) {
              this.sidenav.close();
          }
      })
  }

  toggleGroup(group) {
      this.userService.refreshMap(group);
  }

  isScreenSmall(): boolean {
      return this.mediaMatcher.matches;
  }

}
