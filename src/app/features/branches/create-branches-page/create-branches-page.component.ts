import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BranchService } from '../services/branch.service';
import { Branch } from '@app/core/models/branch.model';
import { NotificationService } from '@app/services/notification.service';
import { Router } from '@angular/router';
import { BranchesMapComponent } from '@app/shared/branches-map/branches-map.component';
import { GeoPoint } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-branches-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatIcon,
    MatButton,
    ReactiveFormsModule,
    BranchesMapComponent,
  ],
  templateUrl: './create-branches-page.component.html',
  styleUrl: './create-branches-page.component.scss',
})
export class CreateBranchesPageComponent {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly branchesService = inject(BranchService);
  private readonly notificationService = inject(NotificationService);

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    location: [null as GeoPoint | null, Validators.required],
  });

  onMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) {
      return;
    }

    const geoPoint = new GeoPoint(event.latLng.lat(), event.latLng.lng());
    this.formGroup.get('location')?.setValue(geoPoint);
  };

  save = () => {
    if (this.formGroup.invalid) {
      return;
    }

    const branch = new Branch({
      name: this.formGroup.value.name ?? '',
      description: this.formGroup.value.description ?? '',
      location: this.formGroup.value.location,
    });

    this.branchesService.save(branch).subscribe((result) => {
      this.notificationService.showSuccess('Filial criada com sucesso');
      this.router.navigate(['/branches']);
    });
  };
}
