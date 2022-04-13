import { Component, OnInit } from '@angular/core';
import { apple } from './apple.mock';
@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {
Apple=apple;
  constructor() { }

  ngOnInit(): void {
  }

}
