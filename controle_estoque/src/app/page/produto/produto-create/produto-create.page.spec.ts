import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoCreatePage } from './produto-create.page';

describe('ProdutoCreatePage', () => {
  let component: ProdutoCreatePage;
  let fixture: ComponentFixture<ProdutoCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
