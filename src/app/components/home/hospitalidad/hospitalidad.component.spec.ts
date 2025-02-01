import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalidadComponent } from './hospitalidad.component';

describe('HospitalidadComponent', () => {
  let component: HospitalidadComponent;
  let fixture: ComponentFixture<HospitalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
