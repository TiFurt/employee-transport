import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBranchesPageComponent } from './create-branches-page.component';

describe('CreateBranchesPageComponent', () => {
  let component: CreateBranchesPageComponent;
  let fixture: ComponentFixture<CreateBranchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBranchesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBranchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
