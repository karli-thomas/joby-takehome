import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoogleMapDemoComponent } from './google-map-demo.component';
import { GoogleMapDemoModule } from './google-map-demo.module';
import { PlanesDashboardComponent } from './planes-dashboard.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    PlanesDashboardComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapDemoModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
