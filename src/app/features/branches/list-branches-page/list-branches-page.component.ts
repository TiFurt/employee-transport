import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-branches',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, RouterLink],
  templateUrl: './list-branches-page.component.html',
  styleUrl: './list-branches-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBranchesPageComponent {}
