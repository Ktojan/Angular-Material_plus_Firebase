import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ToolbarComponent } from './contactmanager/components/toolbar/toolbar.component';
import { MainContentComponent } from './contactmanager/components/main-content/main-content.component';
import { SidenavComponent } from './contactmanager/components/sidenav/sidenav.component';

import { MarkersService } from "./contactmanager/services/markers.service";
import { NewContactDialogComponent } from './contactmanager/components/new-contact-dialog/new-contact-dialog.component';
import { AboutDialogComponent } from './contactmanager/components/about-dialog/about-dialog.component';

const routes: Routes = [
    { path: '', component: SidenavComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
      AppComponent,
      ToolbarComponent,
      MainContentComponent,
      SidenavComponent,
      NewContactDialogComponent,
      AboutDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
      CommonModule,
      MaterialModule,
      FlexLayoutModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [MarkersService],
  bootstrap: [AppComponent],
  entryComponents: [
      NewContactDialogComponent,
      AboutDialogComponent
  ]
})
export class AppModule { }
