import { Entity } from './entity.model';

export class Branch extends Entity {
  name: string;
  description: string;

  constructor(branch: Partial<Branch>) {
    super(branch);
    Object.assign(this, branch);
  }
}
