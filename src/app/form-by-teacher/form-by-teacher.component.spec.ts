import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormByTeacherComponent } from './form-by-teacher.component';

describe('FormByTeacherComponent', () => {
  let component: FormByTeacherComponent;
  let fixture: ComponentFixture<FormByTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormByTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormByTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
