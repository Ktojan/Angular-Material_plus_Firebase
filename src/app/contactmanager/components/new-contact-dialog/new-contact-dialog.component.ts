import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../../models/user";
import { FormControl, Validators } from "@angular/forms";
import { MarkersService } from "../../services/markers.service";

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

    group: User;

    constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
                private service: MarkersService) { }

    name = new FormControl('', [Validators.required]);

    getErrorMessage() {
        return this.name.hasError('required') ? 'You must enter a name of group' : '';
    }

    ngOnInit() {
        this.group = new User();      
    }

    save() {
        this.service.addGroup(this.group);
        this.dialogRef.close(this.group);        
    }

    dismiss() {
        this.dialogRef.close(null);
    }
}
