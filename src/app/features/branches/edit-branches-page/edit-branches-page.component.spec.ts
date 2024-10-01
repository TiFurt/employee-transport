import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchesPageComponent } from './edit-branches-page.component';

describe('EditBranchesPageComponent', () => {
  let component: EditBranchesPageComponent;
  let fixture: ComponentFixture<EditBranchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBranchesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBranchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
