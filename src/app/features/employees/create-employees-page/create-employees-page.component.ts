import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GeoPoint } from '@angular/fire/firestore';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { BranchService } from '@app/features/branches/services/branch.service';
import { NotificationService } from '@app/services/notification.service';
import { Employee } from '@app/core/models/employee.model';
import { EmployeeService } from '@features/employees/employee.service';
import { BranchesMapComponent } from '@shared/branches-map/branches-map.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-employees-page',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatSelectModule,
    ReactiveFormsModule,
    MatButton,
    MatIcon,
    BranchesMapComponent,
    AsyncPipe,
  ],
  templateUrl: './create-employees-page.component.html',
  styleUrl: './create-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeesPageComponent {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly branchService = inject(BranchService);
  private readonly employeesService = inject(EmployeeService);
  private readonly notificationService = inject(NotificationService);

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    location: [null as GeoPoint | null, Validators.required],
    branchId: ['', Validators.required],
  });

  branches$ = this.branchService.getAll();

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
      branchId: this.formGroup.value.branchId ?? '',
    });

    this.employeesService.save(employee).subscribe(() => {
      this.notificationService.showSuccess('Colaborador criada com sucesso');
      this.router.navigate(['/employees']);
    });
  };
}
