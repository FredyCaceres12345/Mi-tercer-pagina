import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscuelaEditPage } from './escuela-edit.page';

describe('EscuelaEditPage', () => {
  let component: EscuelaEditPage;
  let fixture: ComponentFixture<EscuelaEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
