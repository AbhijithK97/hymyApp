import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"

@Component({
  selector: 'app-login-box',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private router: Router){

  }

onSubmit(value1:any,value2:any){

  console.log(typeof value2);

  let userpass =value2

  window.alert("You are sucessfully logged in!!")
  this.router.navigate(['/home'])



}
log(x:any){
  console.log(x)
}




}
