import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.less'],
})
export class SecondScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('init second screens');
  }
}
