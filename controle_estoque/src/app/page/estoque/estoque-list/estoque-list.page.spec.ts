import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstoqueListPage } from './estoque-list.page';

describe('EstoqueListPage', () => {
  let component: EstoqueListPage;
  let fixture: ComponentFixture<EstoqueListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
