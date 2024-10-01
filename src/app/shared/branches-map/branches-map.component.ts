import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-branches-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './branches-map.component.html',
  styleUrl: './branches-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BranchesMapComponent {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: -23.55052, lng: -46.633308 };
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 8,
  };
}
