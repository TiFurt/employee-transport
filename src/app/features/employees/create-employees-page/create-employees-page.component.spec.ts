import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeesPageComponent } from './create-employees-page.component';

describe('CreateEmployeesPageComponent', () => {
  let component: CreateEmployeesPageComponent;
  let fixture: ComponentFixture<CreateEmployeesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmployeesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
