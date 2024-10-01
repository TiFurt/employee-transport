import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BranchService } from '../services/branch.service';
import { RouterLink, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Branch } from '@app/core/models/branch.model';
import { BranchCardComponent } from '../branch-card/branch-card.component';


@Component({
  selector: 'app-list-branches',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, RouterLink, BranchCardComponent],
  templateUrl: './list-branches-page.component.html',
  styleUrl: './list-branches-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBranchesPageComponent implements OnInit {
  private readonly branchService = inject(BranchService);


  branches: Observable<Branch[]>;

  ngOnInit(): void {
    this.branches = this.branchService.getAll();
  }
}
