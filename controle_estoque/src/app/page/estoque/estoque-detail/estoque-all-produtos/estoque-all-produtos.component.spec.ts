import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstoqueAllProdutosComponent } from './estoque-all-produtos.component';

describe('EstoqueAllProdutosComponent', () => {
  let component: EstoqueAllProdutosComponent;
  let fixture: ComponentFixture<EstoqueAllProdutosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueAllProdutosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstoqueAllProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
