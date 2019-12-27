import {Component, OnInit} from '@angular/core';
declare const testFunction: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  ngOnInit(): void {
    testFunction();
  }
}
