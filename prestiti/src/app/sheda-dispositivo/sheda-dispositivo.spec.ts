import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShedaDispositivo } from './sheda-dispositivo';

describe('ShedaDispositivo', () => {
  let component: ShedaDispositivo;
  let fixture: ComponentFixture<ShedaDispositivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShedaDispositivo],
    }).compileComponents();

    fixture = TestBed.createComponent(ShedaDispositivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
