import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  names:String[];
  content:String;
  userid:string;
  user:User;
  constructor(private router: Router,private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) {
    this.names = ["Home","About","Gallery","Help","Contact us","Feedback"];
    this.content = "This is a simple and sample content";
   }

   

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id from home="+id);
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
