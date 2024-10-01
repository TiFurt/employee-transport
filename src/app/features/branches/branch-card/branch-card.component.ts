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
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Branch } from '@app/core/models/branch.model';
import { NotificationService } from '@app/services/notification.service';
import { ConfirmDialogComponent } from '@app/shared/confirm-dialog/confirm-dialog.component';
import { filter } from 'rxjs';
import { BranchService } from '../services/branch.service';
import { BranchesMapComponent } from '@app/shared/branches-map/branches-map.component';

@Component({
  selector: 'app-branch-card',
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
    MatCardSubtitle,
    MatButton,
    RouterLink,
    BranchesMapComponent
  ],
  templateUrl: './branch-card.component.html',
  styleUrl: './branch-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BranchCardComponent {
  private readonly dialog = inject(MatDialog);
  private readonly notificationService = inject(NotificationService);
  private readonly branchService = inject(BranchService);
  branch = input.required<Branch>();

  delete(): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Excluir filial',
          message: 'Deseja realmente excluir esta filial?',
        },
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.branchService.delete(this.branch().id).subscribe({
          next: () => {
            this.notificationService.showSuccess('Pessoa excluída com sucesso');
          },
          error: (error: Error) => {
            this.notificationService.showError(
              `Erro ao excluir filial: ${error.message}`,
            );
          },
        });
      });
  }
}
