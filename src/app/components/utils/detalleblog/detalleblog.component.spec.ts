import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleblogComponent } from './detalleblog.component';

describe('DetalleblogComponent', () => {
  let component: DetalleblogComponent;
  let fixture: ComponentFixture<DetalleblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
