import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-branches-page',
  standalone: true,
  imports: [MatInputModule, MatIcon, MatButton],
  templateUrl: './create-branches-page.component.html',
  styleUrl: './create-branches-page.component.scss',
})
export class CreateBranchesPageComponent {}
