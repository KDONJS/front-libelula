import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadescriptivaComponent } from './paginadescriptiva.component';

describe('PaginadescriptivaComponent', () => {
  let component: PaginadescriptivaComponent;
  let fixture: ComponentFixture<PaginadescriptivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginadescriptivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginadescriptivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
