import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  useri:User=<User>{};
  constructor(private route: Router,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {
  }

  register() : void {
    console.log("user is = "+this.useri.id);
    console.log("user is = "+this.useri.username);
    console.log("user is = "+this.useri.password);
    this.userService.addUser(this.useri).subscribe(() => this.goBack());
    
  }
  goBack(): void {
    this.location.back();
  }

}
