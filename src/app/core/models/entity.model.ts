import { Timestamp } from '@angular/fire/firestore';

export abstract class Entity {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;

  constructor(entity: Partial<Entity>) {
    Object.assign(this, entity);

    if (!this.createdAt) {
      this.createdAt = Timestamp.now();
      this.updatedAt = Timestamp.now();
    }
  }

  isNew(): boolean {
    return !this.id;
  }
}
