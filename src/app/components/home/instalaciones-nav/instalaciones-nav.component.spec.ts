import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesNavComponent } from './instalaciones-nav.component';

describe('InstalacionesNavComponent', () => {
  let component: InstalacionesNavComponent;
  let fixture: ComponentFixture<InstalacionesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionesNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalacionesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
