import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCiclosComponent } from './detalles-ciclos.component';

describe('DetallesCiclosComponent', () => {
  let component: DetallesCiclosComponent;
  let fixture: ComponentFixture<DetallesCiclosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesCiclosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCiclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
