import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  input,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Employee } from '@app/core/models/employee.model';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
import { ConfirmDialogComponent } from '@app/shared/confirm-dialog/confirm-dialog.component';
import { NotificationService } from '@app/services/notification.service';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [
    MatCardActions,
    CurrencyPipe,
    DatePipe,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatIcon,
    MatIconButton,
    MatButton,
    RouterLink,
  ],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardComponent {
  private readonly dialog = inject(MatDialog);
  private readonly notificationService = inject(NotificationService);
  private readonly employeeService = inject(EmployeeService);
  employee = input<Employee>();

  delete(): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Excluir Funcionario',
          message: 'Deseja realmente excluir este funcionario?',
        },
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.employeeService.delete(this.employee()!.id).subscribe({
          next: () => {
            this.notificationService.showSuccess('Pessoa excluída com sucesso');
          },
          error: (error: Error) => {
            this.notificationService.showError(
              `Erro ao excluir funcionario: ${error.message}`,
            );
          },
        });
      });
  }
}
