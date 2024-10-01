import { Entity } from '@core/models/entity.model';

export interface Employee extends Entity {
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
}
