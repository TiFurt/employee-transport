import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services/notification.service';
import { Employee } from '@features/employees/employee.model';
import { EmployeeService } from '@features/employees/employee.service';

@Component({
  selector: 'app-create-employees-page',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, ReactiveFormsModule, MatButton],
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
  });

  save = () => {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const branch = new Employee({
      name: this.formGroup.value.name ?? '',
    });

    this.employeesService.save(branch).subscribe(() => {
      this.notificationService.showSuccess('Colaborador criada com sucesso');
      this.router.navigate(['/employees']);
    });
  };
}