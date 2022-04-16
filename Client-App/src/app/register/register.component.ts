import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  constructor(private fb:FormBuilder,private auth:AuthService) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
     email:['',Validators.required],
     password:['',Validators.required]
   })
  }
  onSubmit(){
    console.log(this.registerForm.value)
    this.auth.register(this.registerForm.value);
  }
}
