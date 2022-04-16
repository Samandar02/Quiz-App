import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  constructor(private fb:FormBuilder,private auth:AuthService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
     email:['',Validators.required],
     password:['',Validators.required]
   })
  }
  login(){
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value);
  }
}
