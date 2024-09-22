import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstoqueCriatePage } from './estoque-criate.page';

describe('EstoqueCriatePage', () => {
  let component: EstoqueCriatePage;
  let fixture: ComponentFixture<EstoqueCriatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueCriatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
