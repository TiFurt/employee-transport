import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Employee } from '../employee.model';
import { GeoPoint } from '@angular/fire/firestore';
import { EmployeeCardComponent } from '@features/employees/employee-card/employee-card.component';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, RouterLink, EmployeeCardComponent],
  templateUrl: './list-employees-page.component.html',
  styleUrl: './list-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEmployeesPageComponent {
  employees: Employee[] = [
    new Employee({ 
      name: 'John Doe', 
      location: { latitude: 40.7128, longitude: -74.0060 } as GeoPoint 
    }),
    new Employee({ 
      name: 'Jane Smith', 
      location: { latitude: 34.0522, longitude: -118.2437 } as GeoPoint 
    }),
    new Employee({ 
      name: 'Alice Johnson', 
      location: null
    }),
  ];
}
