import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
} from '@angular/fire/firestore';
import { Branch } from '@app/core/models/branch.model';
import { BaseService } from '@app/core/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class BranchService extends BaseService<Branch> {
  protected override collectionName = 'branches';
  protected override collection = collection(
    this.firestore,
    this.collectionName,
  ) as CollectionReference<Branch, DocumentData>;
}
