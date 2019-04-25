import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-dialog',
  template: `
    <p>This is an Angular-app with responsive design implemented with some Angular Material components. 
    The main feature is a buit-in interactve map with this 2GIS API <a href="http://api.2gis.ru/doc/maps">http://api.2gis.ru/doc/maps</a> completed with functional of adding
markers on the map and saving them to groups.</p>
    <p>You can add new markers with RIGHT-clicks and then save them to new group with a button in ... menu</p>    
  `
})
export class AboutDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
