import { Component, OnInit } from '@angular/core';
import {  pastries  } from './pestry_mock';
@Component({
  selector: 'app-pestry-listt',
  templateUrl: './pestry-listt.component.html',
  styleUrls: ['./pestry-listt.component.css']
})
export class PestryListtComponent implements OnInit {

  pas = pastries;

  constructor() { 
  }
  ngOnInit(): void {
  }

  }
