import { Timestamp } from '@angular/fire/firestore';

export interface Entity {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  deletedAt: Timestamp | null;
}
