import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee-page',
  standalone: true,
  imports: [],
  templateUrl: './edit-employees-page.component.html',
  styleUrl: './edit-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditEmployeesPageComponent {}
