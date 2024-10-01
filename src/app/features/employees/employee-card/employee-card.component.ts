import {
  CurrencyPipe,
  DatePipe
} from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  MatButton,
  MatIconButton
} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Employee } from '@features/employees/employee.model';

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
    ButtonComponent,
    MatIcon,
    MatIconButton,
    MatButton,
  ],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardComponent {
  employee = input<Employee>();
}
