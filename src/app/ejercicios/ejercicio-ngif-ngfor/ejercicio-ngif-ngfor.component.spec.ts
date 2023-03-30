import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioNgifNgforComponent } from './ejercicio-ngif-ngfor.component';

describe('EjercicioNgifNgforComponent', () => {
  let component: EjercicioNgifNgforComponent;
  let fixture: ComponentFixture<EjercicioNgifNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioNgifNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioNgifNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
