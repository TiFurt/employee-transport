import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-branches-page',
  standalone: true,
  imports: [MatInputModule, MatIcon, MatButton, ReactiveFormsModule],
  templateUrl: './create-branches-page.component.html',
  styleUrl: './create-branches-page.component.scss',
})
export class CreateBranchesPageComponent {
  private readonly formBuilder = inject(FormBuilder);

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
  });

  save = () => {
    if (this.formGroup.invalid) {
      return;
    }
  };
}
