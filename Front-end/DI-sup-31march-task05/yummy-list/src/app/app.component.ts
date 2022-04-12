
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  sel_pastry:any;
  getDetails(pastry_details:any){
    //console.log(pastry_details);
    this.sel_pastry=pastry_details;
  }
}

