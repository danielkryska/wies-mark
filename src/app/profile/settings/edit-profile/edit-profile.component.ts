import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html'
})
export class EditProfileComponent implements OnInit {
  public nickForm: FormGroup = new FormGroup({
    nick: new FormControl(null, [Validators.required])
  });
  public emailForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });
  public passwordChangeForm: FormGroup = new FormGroup({
    old: new FormControl(null, [Validators.required]),
    new: new FormControl(null, [Validators.required])
  });

  constructor() {}

  ngOnInit() {
    // TODO: init fields with profile values
  }
}
