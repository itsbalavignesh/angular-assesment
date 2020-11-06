import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,FontAwesomeModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
