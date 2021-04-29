import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {
  
  constructor(private router: Router,private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) {
    
   }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
