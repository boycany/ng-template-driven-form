import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAfterClassComponent } from './form-after-class.component';

describe('FormAfterClassComponent', () => {
  let component: FormAfterClassComponent;
  let fixture: ComponentFixture<FormAfterClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAfterClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAfterClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
