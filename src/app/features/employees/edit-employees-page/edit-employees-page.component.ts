import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { GeoPoint } from '@angular/fire/firestore';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services/notification.service';
import { BranchesMapComponent } from '@app/shared/branches-map/branches-map.component';

import { EmployeeService } from '../employee.service';
import { Employee } from '@app/core/models/employee.model';

@Component({
  selector: 'app-edit-employee-page',
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
  templateUrl: './edit-employees-page.component.html',
  styleUrl: './edit-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeesPageComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly employeesService = inject(EmployeeService);
  private readonly notificationService = inject(NotificationService);

  formGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    location: [null as GeoPoint | null, Validators.required],
  });

  employeeId = input<string>('', {
    alias: 'id',
  });

  initialPosition: google.maps.LatLngLiteral;

  ngOnInit(): void {
    if (!this.employeeId()) {
      this.router.navigate(['/employees']);
      return;
    }

    this.getEmployee();
  }

  onMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) {
      return;
    }

    const geoPoint = new GeoPoint(event.latLng.lat(), event.latLng.lng());
    this.formGroup.controls.location?.setValue(geoPoint);
  };

  update = () => {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const employee = new Employee({
      id: this.formGroup.value.id ?? '',
      name: this.formGroup.value.name ?? '',
      location: this.formGroup.value.location ?? null,
    });

    this.employeesService.update(employee).subscribe(() => {
      this.notificationService.showSuccess(
        'Colaborador atualizado com sucesso',
      );
      this.router.navigate(['/employees']);
    });
  };

  private getEmployee() {
    const employeeReff = this.employeesService.getRefById(this.employeeId());
    this.employeesService.getByRef(employeeReff).subscribe((employee) => {
      this.formGroup.patchValue(employee);
      this.initialPosition = {
        lat: employee.location?.latitude ?? 0,
        lng: employee.location?.longitude ?? 0,
      };
    });
  }
}
