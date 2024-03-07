import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmployeeComponentComponent } from './app-employee-component.component';

describe('AppEmployeeComponentComponent', () => {
  let component: AppEmployeeComponentComponent;
  let fixture: ComponentFixture<AppEmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppEmployeeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
