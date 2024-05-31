import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscuelaListPage } from './escuela-list.page';

describe('EscuelaListPage', () => {
  let component: EscuelaListPage;
  let fixture: ComponentFixture<EscuelaListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
