import { GeoPoint } from '@angular/fire/firestore';
import { Entity } from '@core/models/entity.model';

export class Employee extends Entity {
  name: string;
  location: GeoPoint | null;
  branchId: string;

  constructor(employee: Partial<Employee>) {
    super(employee);
    Object.assign(this, employee);
  }
}
