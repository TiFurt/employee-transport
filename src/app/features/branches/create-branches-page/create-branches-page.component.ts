import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BranchService } from '../services/branch.service';
import { Branch } from '@app/core/models/branch.model';

@Component({
  selector: 'app-create-branches-page',
  standalone: true,
  imports: [MatInputModule, MatIcon, MatButton, ReactiveFormsModule],
  templateUrl: './create-branches-page.component.html',
  styleUrl: './create-branches-page.component.scss',
})
export class CreateBranchesPageComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly branchesService = inject(BranchService);

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
  });

  save = () => {
    if (this.formGroup.invalid) {
      return;
    }

    const branch = new Branch({
      name: this.formGroup.value.name ?? '',
      description: this.formGroup.value.description ?? '',
    });

    this.branchesService.save(branch);
  };
}
