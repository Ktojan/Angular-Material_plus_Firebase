import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from '../shared/material.module';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { UserService } from "./services/user.service";
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
    {
        path: '', component: ContactmanagerAppComponent,
        children: [
            { path: ':id', component: MainContentComponent },
            { path: '', component: MainContentComponent}
        ]
    },
    { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent],
  providers: [UserService],
  imports: [
      CommonModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
