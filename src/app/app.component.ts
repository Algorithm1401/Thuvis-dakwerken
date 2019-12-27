import {Component, OnInit} from '@angular/core';
declare const testFunction: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'thuvisdakwerken';
  ngOnInit(): void {
    testFunction();
  }
}
