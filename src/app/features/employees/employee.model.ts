import { Entity } from '@core/models/entity.model';

export class Employee extends Entity {
  name: string;
  longitude: number;
  latitude: number;
  postCode: string;
  canton: string;
  street: string;
  streetNumber: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;

  constructor(employee: Partial<Employee>) {
    super(employee);
    Object.assign(this, employee);
  }
}
