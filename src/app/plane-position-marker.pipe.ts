import { Pipe, PipeTransform } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

@Pipe({
  name: 'planeMarker'
})
export class PlaneMarkerPipe implements PipeTransform {
  transform(airplanePosition: IAirplanePosition): google.maps.MarkerOptions {
    return {
      label: airplanePosition.airplane_id,
      position: {
        lat: airplanePosition.latitude_deg,
        lng: airplanePosition.longitude_deg,
      }
    };
  }
}