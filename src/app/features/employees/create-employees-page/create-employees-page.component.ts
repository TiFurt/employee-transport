import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-employees-page',
  standalone: true,
  imports: [],
  templateUrl: './create-employees-page.component.html',
  styleUrl: './create-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeesPageComponent {

}
