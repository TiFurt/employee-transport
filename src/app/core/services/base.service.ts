import { inject } from '@angular/core';
import {
  addDoc,
  collectionData,
  doc,
  docData,
  DocumentReference,
  Firestore,
  query,
  serverTimestamp,
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

  delete(id: string): Observable<DocumentReference> {
    return this.update({
      id,
      deletedAt: serverTimestamp(),
    } as T);
  }

  save(entity: Partial<T>): Observable<DocumentReference> {
    if (entity.deletedAt === undefined) {
      entity.deletedAt = null;
    }

    if (entity.id) {
      return this.update(entity as T);
    }

    delete entity.id;
    return from(addDoc(this.collection, this.toObject(entity)));
  }

  update(entity: Partial<T> & { id: string }): Observable<DocumentReference> {
    const entityRef = this.getRefById(entity.id);

    return from(updateDoc(entityRef, { ...entity })).pipe(
      map(() => entityRef),
    ) as Observable<DocumentReference>;
  }

  private toObject(value: any): object {
    return Object.assign({}, value);
  }
}
