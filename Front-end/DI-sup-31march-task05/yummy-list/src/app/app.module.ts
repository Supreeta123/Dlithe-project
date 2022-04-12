import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PestryListtComponent } from './pestry-listt/pestry-listt.component';

import {MatCardModule} from '@angular/material/card';
import { PestryListtDetailsComponent } from './pestry-listt-details/pestry-listt-details.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PestryListtComponent,
    PestryListtDetailsComponent,
    RegistrationFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
