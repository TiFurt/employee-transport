import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  input,
  output,
  signal,
} from '@angular/core';
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
  markerOptions = computed<google.maps.MarkerOptions>(() => {
    return { draggable: !this.selectMultiplePositions() || this.draggable() };
  });
  markerPositions = signal<google.maps.LatLngLiteral[]>([]);

  enableClick = input<boolean>(false);
  selectMultiplePositions = input<boolean>(false);
  draggable = input<boolean>(false);
  onClick = output<google.maps.MapMouseEvent | google.maps.IconMouseEvent>();

  @Input() set initialPositions(value: google.maps.LatLngLiteral[]) {
    this.markerPositions.set(value);
  }

  onMapClick(
    event: google.maps.MapMouseEvent | google.maps.IconMouseEvent,
  ): void {
    if (!this.enableClick) {
      return;
    }

    this.addMarker(event);
    this.onClick.emit(event);
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (!event.latLng) {
      return;
    }

    let markerPositions = this.markerPositions();

    if (!this.selectMultiplePositions()) {
      markerPositions = [];
    }

    markerPositions.push(event.latLng.toJSON());
    this.markerPositions.set(markerPositions);
  }
}
