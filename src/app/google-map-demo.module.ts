// google-maps-demo.module.ts

import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { PlaneMarkerPipe } from './plane-position-marker.pipe';


import { GoogleMapDemoComponent } from './google-map-demo.component';

@NgModule({
  imports: [GoogleMapsModule, BrowserModule],
  declarations: [GoogleMapDemoComponent, PlaneMarkerPipe],
  exports: [GoogleMapDemoComponent],
})
export class GoogleMapDemoModule {}
