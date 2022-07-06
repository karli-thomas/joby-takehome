import { Component, Input, ViewChild } from '@angular/core';
import { MapMarker, GoogleMap, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'google-map-demo',
  templateUrl: 'google-map-demo.html',
})
export class GoogleMapDemoComponent {
  // @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow = {};
  @Input() currentFleetPositions: IAirplanePosition[] = [];
  center: google.maps.LatLngLiteral = { lat: 43, lng: -89 };
  zoom = 5;
  display: google.maps.LatLngLiteral | null = null;
  options: google.maps.MapOptions = {};

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.center = event.latLng.toJSON();
    }
  }

  // move(event: google.maps.MapMouseEvent) {
  //   if (event.latLng) {
  //     this.display = event.latLng.toJSON();
  //   }
  // }

  // openInfoWindow(plane: object) {
  //   this.infoWindow.open(plane.airplane_id);
  // }
}

