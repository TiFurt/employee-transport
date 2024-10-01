import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services/notification.service';
import { EmployeeService } from '@features/employees/employee.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-employees-page',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatIcon,
  ],
  templateUrl: './delete-employees-page.component.html',
  styleUrls: ['./delete-employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteEmployeesPageComponent {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly employeesService = inject(EmployeeService);
  private readonly notificationService = inject(NotificationService);

  formGroup = this.formBuilder.group({
    id: ['', Validators.required],
  });

  delete = () => {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const employeeId = this.formGroup.value.id ?? '';

    this.employeesService.delete(employeeId).subscribe(() => {
      this.notificationService.showSuccess('Colaborador excluído com sucesso');
      this.router.navigate(['/employees']);
    });
  };
}
