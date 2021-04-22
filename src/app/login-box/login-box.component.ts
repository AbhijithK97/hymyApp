import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {

onSubmit(value:any){

  console.log(value);

  window.alert("You are sucessfully logged in!!")


}
log(x:any){
  console.log(x)
}




}
