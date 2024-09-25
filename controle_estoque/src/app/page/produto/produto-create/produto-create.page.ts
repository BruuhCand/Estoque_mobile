import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { add, home, homeOutline, list, listOutline, sadOutline, settings, settingsOutline, trash } from 'ionicons/icons';
import { IonicModule, IonModal } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { Categoria } from 'src/app/model/categoria';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.page.html',
  styleUrls: ['./produto-create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ProdutoCreatePage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;
  private activatedRoute = inject(ActivatedRoute);
  
  formularioProduto: FormGroup;
  categoriaNome = new FormControl('', [Validators.required]);
  isEdit: boolean = false;
  nameCategoria: string = "";
  isModalOpen: boolean = false;
  isToastOpen = false;
  mensagemToast: string = "Produto não encontrado"

  categorias: Categoria[] = [
    {id: 1, nome: "Camiseta" },
    {id: 2, nome: "Cachecol"}
  ]
  constructor(private router: Router) {

    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings, trash })

    this.formularioProduto = new FormGroup({

      estoqueId: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      codigoBarras: new FormControl('', [Validators.required]),
      qntEstoque: new FormControl('', [Validators.required]),
      qntMinima: new FormControl('', [Validators.required]),
      categoriaId: new FormControl('', [Validators.required]),
      ativo: new FormControl(1),
      valor: new FormControl('', [Validators.required, Validators.min(1)])

    });
   }

  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('id') as string !== "create"){
      this.isEdit = true;
      this.formularioProduto.get('estoqueId')?.disable();
      this.formularioProduto.get('codigoBarras')?.disable();
      this.formularioProduto.get('qntEstoque')?.disable();

      this.loadDataForEditing();
    }
    this.formularioProduto.get('ativo')?.valueChanges.subscribe(value => {
      this.formularioProduto.get('ativo')?.setValue(value ? 1 : 0, { emitEvent: false });
    });

    this.formularioProduto.get('codigoBarras')?.valueChanges.subscribe(value => {
      console.log("codigo de barras alterado")
    });
  }

  onSubmit() {
    console.log(this.formularioProduto.value); // Retorna {nome: ..., preco: ...}
  }


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.nameCategoria, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm' && ev.detail.data) {
      const newCategoria: Categoria = {
        id: this.categorias.length + 1, // Exemplo: gerando um ID único
        nome: ev.detail.data
      };
      this.categorias.push(newCategoria);
    }
  }

  loadDataForEditing() {
    this.formularioProduto.patchValue({
      estoqueId: 1,
      nome: "Produto de exemplo",
      codigoBarras: 123456789,
      qntEstoque: 10,
      qntMinima: 5,
      categoriaId: 1,
      ativo: 1,
      valor: 100
    });
  }

  procuraItem(item: any, isOpen: any){
    
    if(item === 123456789){
      this.formularioProduto.patchValue({
        estoqueId: 1,
        nome: "Produto de exemplo",
        codigoBarras: 123456789,
        qntEstoque: 10,
        qntMinima: 5,
        categoriaId: 1,
        ativo: 1,
        valor: 100
      });
      this.mensagemToast = "Produto encontrado com sucesso"
    }
    this.isToastOpen = isOpen;
  }

  public alertButtons = [
    {
      text: 'NÃO',
      handler: () => {
        var idEstoque = this.formularioProduto.get('estoqueId')?.value
        this.router.navigate([`/estoque`, idEstoque])
      },
    },
    {
      text: 'SIM',
      handler: () => {
        this.formularioProduto.reset(); 
      },
    },
  ];

}
