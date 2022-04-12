import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
cities=['Badami','Bagalkot','Belagavi','singapur'];

registrationModel={
  firstname:'Supreeta',
  phone:'8147025488',
  email:'supreetajingi@gmail.com',
  DOB:'05-10-1997',
  Address:'Badami',
  city:'bgm',
  pincode:'587114'

}

  constructor() { }

  ngOnInit(): void {
  }

}
