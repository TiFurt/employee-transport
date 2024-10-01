import { inject } from '@angular/core';
import {
  addDoc,
  collectionData,
  doc,
  docData,
  DocumentReference,
  Firestore,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Entity } from '@core/models/entity.model';
import { CollectionReference } from '@firebase/firestore';
import { from, map, Observable } from 'rxjs';

export abstract class BaseService<T extends Entity> {
  protected readonly firestore: Firestore = inject(Firestore);
  protected abstract readonly collectionName: string;
  protected abstract readonly collection: CollectionReference<T>;
  protected readonly notDeletedWhereStatement = where('deletedAt', '==', null);
  protected readonly deletedWhereStatement = where('deletedAt', '!=', null);

  getAll(): Observable<T[]> {
    return collectionData<T>(
      query(this.collection, this.notDeletedWhereStatement),
      {
        idField: 'id',
      },
    );
  }

  getRefById(id: string): DocumentReference {
    return doc(this.firestore, this.collectionName, id);
  }

  getByRef(classRef: DocumentReference): Observable<T> {
    return docData<T>(classRef, { idField: 'id' });
  }

  save(entity: Partial<T>): Observable<DocumentReference> {
    if (entity.deletedAt === undefined) {
      entity.deletedAt = null;
    }

    if (entity.id) {
      return this.update(entity as T);
    }

    delete entity.id;
    return from(addDoc(this.collection, entity as T));
  }

  update(
    classItem: Partial<T> & { id: string },
  ): Observable<DocumentReference> {
    const personRef = this.getRefById(classItem.id);

    return from(updateDoc(personRef, { ...classItem })).pipe(
      map(() => personRef),
    ) as Observable<DocumentReference>;
  }
}
