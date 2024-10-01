import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { BranchesMapComponent } from '@app/shared/branches-map/branches-map.component';
import { BranchService } from '../services/branch.service';
import { NotificationService } from '@app/services/notification.service';
import { GeoPoint } from '@angular/fire/firestore';
import { Branch } from '@app/core/models/branch.model';

@Component({
  selector: 'app-edit-branches-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatIcon,
    MatButton,
    ReactiveFormsModule,
    BranchesMapComponent,
  ],
  templateUrl: './edit-branches-page.component.html',
  styleUrl: './edit-branches-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBranchesPageComponent {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly branchesService = inject(BranchService);
  private readonly notificationService = inject(NotificationService);
  
  id = input<string>();

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
      this.formGroup.markAllAsTouched();
      return;
    }

    const branch = new Branch({
      id: this.id(),
      name: this.formGroup.value.name ?? '',
      description: this.formGroup.value.description ?? '',
      location: this.formGroup.value.location,
    });

    this.branchesService.save(branch).subscribe(() => {
      this.notificationService.showSuccess('Filial editada com sucesso');
      this.router.navigate(['/branches']);
    });
  };
}
