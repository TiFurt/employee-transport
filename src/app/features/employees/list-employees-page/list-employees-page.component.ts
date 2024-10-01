import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Employee } from '../employee.model';
import { GeoPoint } from '@angular/fire/firestore';
import { EmployeeCardComponent } from '@features/employees/employee-card/employee-card.component';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, RouterLink, EmployeeCardComponent],
  templateUrl: './list-employees-page.component.html',
  styleUrl: './list-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEmployeesPageComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService)

  employees: Observable<Employee[]>;
  
  ngOnInit(): void {
    this.employees = this.employeeService.getAll()
  }
}
