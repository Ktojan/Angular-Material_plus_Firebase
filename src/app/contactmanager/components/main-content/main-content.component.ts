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
        console.dir(window.DG);

      this.route.params.subscribe(params => {
          let id = params['id'];
          if (!id) id = 1;
          this.user = null;
          this.service.users.subscribe(users => {
              if (users.length == 0) return;
              this.user = this.service.userById(id);
          })
      })

      let map = window.DG.map('map', {
          'center': [54.98, 82.89],
          'zoom': 13
      });
      console.dir(map);
    }


}
