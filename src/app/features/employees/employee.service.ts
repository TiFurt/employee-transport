import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
} from '@angular/fire/firestore';
import { BaseService } from '@core/services/base.service';
import { Employee } from '@features/employees/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService<Employee> {
  protected override collectionName = 'employees';
  protected override collection = collection(
    this.firestore,
    this.collectionName,
  ) as CollectionReference<Employee, DocumentData>;
}
