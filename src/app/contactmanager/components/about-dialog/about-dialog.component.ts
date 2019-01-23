import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-dialog',
  template: `
    <p>
      This is an Angular 7 simple app built on Angular Material components with the help of Aiden Towfeek's course. 
    </p>
    <p>It's a simple app with short contact-list where you can look through contacts info and also notes (displayed
    with a Material Table with filtering, sorting, pagination) and add new to local storage.</p>

    <p><a href="https://github.com/Ktojan/Angular-Material_plus_Firebase">code on Github</a></p>
  `,
  styles: []
})
export class AboutDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
