import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GeoPoint } from '@angular/fire/firestore';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services/notification.service';
import { Employee } from '@features/employees/employee.model';
import { EmployeeService } from '@features/employees/employee.service';
import { BranchesMapComponent } from '@shared/branches-map/branches-map.component';

@Component({
  selector: 'app-create-employees-page',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatIcon,
    BranchesMapComponent,
  ],
  templateUrl: './create-employees-page.component.html',
  styleUrl: './create-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeesPageComponent {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly employeesService = inject(EmployeeService);
  private readonly notificationService = inject(NotificationService);

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    location: [null as GeoPoint | null, Validators.required],
  });

  onMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) {
      return;
    }

    const geoPoint = new GeoPoint(event.latLng.lat(), event.latLng.lng());
    this.formGroup.controls.location?.setValue(geoPoint);
  };

  save = () => {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const employee = new Employee({
      name: this.formGroup.value.name ?? '',
      location: this.formGroup.value.location ?? null,
    });

    this.employeesService.save(employee).subscribe(() => {
      this.notificationService.showSuccess('Colaborador criada com sucesso');
      this.router.navigate(['/employees']);
    });
  };
}
