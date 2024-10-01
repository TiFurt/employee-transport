import { where } from '@angular/fire/firestore';

export const notDeletedWhereStatement = where('deletedAt', '==', null);
export const deletedWhereStatement = where('deletedAt', '!=', null);
