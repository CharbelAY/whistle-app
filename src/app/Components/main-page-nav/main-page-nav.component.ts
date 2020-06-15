import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page-nav',
  templateUrl: './main-page-nav.component.html',
  styleUrls: ['./main-page-nav.component.css']
})
export class MainPageNavComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
