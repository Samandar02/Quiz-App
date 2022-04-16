import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://localhost:44342/api/account'
  constructor(private http:HttpClient,private router:Router) { }
  register(credentioals:any){
    this.http.post(this.url,credentioals,{responseType:"text"}).subscribe(response=>{
      this.afterLogin(response);
    })
  }
  login(credentioals:any){
    this.http.post(this.url+'/login',credentioals,{responseType:"text"}).subscribe(response=>{
      this.afterLogin(response);
    })
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
  afterLogin(response:string){
    localStorage.setItem('token',response);
    this.router.navigate([''])
  }
  get isAuthenticated(){
    return !!localStorage.getItem('token');
  }
}
