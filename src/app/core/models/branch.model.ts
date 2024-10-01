import { Entity } from './entity.model';
import { Timestamp } from '@angular/fire/firestore';

export class Branch implements Entity {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;

  name: string;
  description: string;

  constructor(branch: Partial<Branch>) {
    Object.assign(this, branch);
  }
}
