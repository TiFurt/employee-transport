import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BranchesMapComponent } from '../../shared/branches-map/branches-map.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BranchesMapComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
