import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { logging } from 'protractor';
import { format } from 'path';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string="";
  usererror:any;

  constructor( public fb: FormBuilder) {
    this.myForm= this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      dob:['',[Validators.required]],
      country:['',[Validators.required]]
    })
   }
   
   ngOnInit() {
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log("Form Submitted!");
      this.myForm.reset();
    }
  }

}
