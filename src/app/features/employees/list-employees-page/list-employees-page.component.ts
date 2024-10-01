import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, RouterLink],
  templateUrl: './list-employees-page.component.html',
  styleUrl: './list-employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEmployeesPageComponent {}
