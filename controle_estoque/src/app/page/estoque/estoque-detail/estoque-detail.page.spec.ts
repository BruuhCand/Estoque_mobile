import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstoqueDetailPage } from './estoque-detail.page';

describe('EstoqueDetailPage', () => {
  let component: EstoqueDetailPage;
  let fixture: ComponentFixture<EstoqueDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
