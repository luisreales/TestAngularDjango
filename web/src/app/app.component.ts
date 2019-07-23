import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

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
      password:''
    };
  }

  registerUser(){
     this.userService.registerNewUser(this.input).subscribe(
       response => {
         alert('User ' + this.input.username + 'has been created');
       },
       error => {
         console.log('error',error);
       }
     )
  }

  loginForUser(){
    this.userService.loginForUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + 'is loggued');
      },
      error => {
        console.log('error',error);
      }
    )
 }


}
