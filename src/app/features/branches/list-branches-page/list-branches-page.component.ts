import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-branches',
  standalone: true,
  imports: [CommonModule],
  template: `<p>list-branches works!</p>`,
  styleUrl: './list-branches-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBranchesPageComponent {}
