import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  names:String[];
  content:String;
  constructor() {
    this.names = ["Home","About","Gallery","Help","Contact us","Feedback"];
    this.content = "This is a simple and sample content";
   }

  ngOnInit(): void {
  }

}
