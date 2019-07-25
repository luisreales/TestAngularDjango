import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent  implements OnInit {

  input;

  constructor(private userService:UserService){

  }

  ngOnInit(){   
    this.input = {
      username : '',
      password:'',
      email:''
    };
  }

  registerUser(){
     this.userService.registerNewUser(this.input).subscribe(
       response => {
         alert('User ' + this.input.username + ' has been created');
         this.input.username = null;
         this.input.password = null;
         this.input.email = null;
        
       },
       error => {
        alert('Error for creating this username: ' + this.input.username);
         console.log('error',error);
         this.input.username = null;
         this.input.password = null;
         this.input.email = null;
       }
     )
  }

  loginForUser(){
    this.userService.loginForUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + 'is loggued. Welcome!');
        this.input.username = null;
        this.input.password = null;        
      },
      error => {
        alert('User ' + this.input.username + ' is invalid, verify username or password');
        this.input.username = null;
        this.input.password = null;
        console.log('error',error);
      }
    )
 }


}
