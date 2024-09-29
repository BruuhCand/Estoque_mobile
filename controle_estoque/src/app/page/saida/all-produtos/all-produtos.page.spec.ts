import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllProdutosPage } from './all-produtos.page';

describe('AllProdutosPage', () => {
  let component: AllProdutosPage;
  let fixture: ComponentFixture<AllProdutosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
