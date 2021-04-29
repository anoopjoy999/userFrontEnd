import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:string;
 password:string;
 user:User=<User>{};
 useri:User=<User>{};

  constructor(private route: Router,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {
  }
  //submitted = false;
  login() : void {
    localStorage.clear();
    //his.submitted = true;
    console.log("username="+this.id);
    console.log("password="+this.password);
    if ( typeof this.useri.id !== 'undefined' && this.useri.id ){
    this.userService.login(this.useri)
      .subscribe(user => this.user=user);
      console.log(this.user.id);
      console.log(this.user.password);
      console.log(this.user);
    if( this.useri.password == this.user.password){
      console.log("token1="+this.user.token);
      localStorage.setItem('token', this.user.token);
      console.log("token from local="+localStorage.getItem('token'));
      this.route.navigate(["/home/"+this.user.id]);
      }else {
        alert("Invalid credentials");
      }
    }else{
      alert("Enter credentials");
    }
  }

  

}
