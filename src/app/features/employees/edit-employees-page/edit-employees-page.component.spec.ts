import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeesPageComponent } from './edit-employees-page.component';

describe('EditEmployeePageComponent', () => {
  let component: EditEmployeesPageComponent;
  let fixture: ComponentFixture<EditEmployeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmployeesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEmployeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
