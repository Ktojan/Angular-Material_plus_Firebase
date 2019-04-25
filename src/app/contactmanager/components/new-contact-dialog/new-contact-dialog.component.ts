import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../../models/user";
import { FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

    user: User;

    constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
                private userService: UserService) { }

    name = new FormControl('', [Validators.required]);

    getErrorMessage() {
        return this.name.hasError('required') ? 'You must enter a name' : '';
    }

    ngOnInit() {
        this.user = new User();      
    }

    save() {
        this.userService.addUser(this.user);
        this.dialogRef.close(this.user);        
        console.table(this.userService.users);
    }

    dismiss() {
        this.dialogRef.close(null);
    }
}
