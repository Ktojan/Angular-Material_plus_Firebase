import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Group } from "../../models/group";
import { MarkersService } from "../../services/markers.service";

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

    group: Group;

    constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
                private service: MarkersService) { }

    ngOnInit() {
        this.group = new Group();      
    }

    save() {
        this.service.addGroup(this.group);
        this.dialogRef.close(this.group);        
    }

    dismiss() {
        this.dialogRef.close(null);
    }
}
