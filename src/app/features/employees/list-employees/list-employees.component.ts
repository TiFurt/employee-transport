import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>list-employees works!</p>`,
  styleUrl: './list-employees.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEmployeesComponent { }
