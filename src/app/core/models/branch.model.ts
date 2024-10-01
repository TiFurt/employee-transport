import { Entity } from './entity.model';
import { GeoPoint } from '@angular/fire/firestore';

export class Branch extends Entity {
  name: string;
  description: string;
  location: GeoPoint | null;

  constructor(branch: Partial<Branch>) {
    super(branch);
    Object.assign(this, branch);
  }
}
