import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { add, home, homeOutline, list, listOutline, sadOutline, settings, settingsOutline, trash } from 'ionicons/icons';
import { IonicModule, IonModal } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { Categoria } from 'src/app/model/categoria';
import { OverlayEventDetail } from '@ionic/core/components';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { LoginService } from 'src/app/service/login.service';
import { EstoqueService } from 'src/app/service/estoque.service';
import { Produto, ProdutoDTO } from 'src/app/model/produto';
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
  dadosRecebidos: any
  messageAlert: string = "Produto salvo com sucesso!! Deseja adicionar um novo produto ao estoque?"
  buttons: string = "alertButtons"
  categorias: Categoria[] = [{id: 1, nome: "vermelho"}]
  estoques: any[] = []
  alertButtons: any[] = []
  constructor(private router: Router, private produtoService: ProdutoService, private  estoqueService: EstoqueService) {

    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings, trash })

    this.formularioProduto = new FormGroup({

      estoqueId: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      codigoBarras: new FormControl('', [Validators.required]),
      qntEstoque: new FormControl('', [Validators.required]),
      qntMinima: new FormControl('', [Validators.required]),
      categoriaId: new FormControl('', [Validators.required]),
      validade: new FormControl(new Date(), [Validators.required, ]),
      valor: new FormControl('', [Validators.required, Validators.min(1)])

    });
   }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id') as string 
     
      if (id && id !== "create") {
        this.isEdit = true;
      this.formularioProduto.get('estoqueId')?.disable();
      this.formularioProduto.get('codigoBarras')?.disable();
      this.formularioProduto.get('qntEstoque')?.disable();
      this.formularioProduto.get('validade')?.disable();
      this.messageAlert = "Produto alterado com sucesso!!"
      this.loadDataForEditing(Number(id));
      } else {
        this.envioEstoque()
        this.formularioProduto.get('estoqueId')?.enable();
        this.formularioProduto.get('codigoBarras')?.enable();
        this.formularioProduto.get('qntEstoque')?.enable();
        this.formularioProduto.get('validade')?.enable();
      }

    this.carregaListas();
    this.buttonsAlert(this.isEdit)
  }

    envioEstoque(){

      const navigation = this.router.getCurrentNavigation();
      if (navigation  && navigation.extras.state !== undefined ) {
        this.dadosRecebidos = navigation.extras.state['estoqueId'];
        this.formularioProduto.get('estoqueId')?.setValue(Number(this.dadosRecebidos));
        console.log(this.dadosRecebidos)
      }
    }

  onSubmit() {

    if(this.isEdit){

    }
    else{

      var produto: Produto = {
        nome: this.formularioProduto.get('nome')?.value,
        codigoBarras: this.formularioProduto.get('codigoBarras')?.value.toString(),
        quantidade: this.formularioProduto.get('qntEstoque')?.value,
        quantidadeMinima: this.formularioProduto.get('qntMinima')?.value,
        categoriaId: Number(this.formularioProduto.get('categoriaId')?.value),
        estoqueId: Number(this.formularioProduto.get('estoqueId')?.value),
        validade: this.formularioProduto.get('validade')?.value,
        valor: this.formularioProduto.get('valor')?.value
      }

      console.log(produto)

      this.produtoService.create(produto).subscribe({
        next(value) {
          console.log(value)
        },
        error(err) {
          console.error(err)
        },
      })
    }
    
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

  loadDataForEditing(id: number) {

    this.produtoService.getById(id).subscribe({
      next: (value: ProdutoDTO) =>{
        this.formularioProduto.patchValue({
          estoqueId: value.estoqueId,
          nome: value.nome,
          codigoBarras: value.codigoBarras,
          qntEstoque: value.quantidadeTotal,
          qntMinima: value.quantidadeMinima,
          categoriaId: 1,
          validade: value.validades[0].dataValidade,
          valor: value.valor
        });
      },
      error: (err) =>{
        console.log(err)
      }
    })
    
  }

  procuraItem(item: any, isOpen: any){
    const cod = Number(item)
    this.produtoService.getByCodBarras(cod).subscribe({
      next: (value: ProdutoDTO) =>{
        console.log("entrou no procura")
        this.formularioProduto.patchValue({
          estoqueId: value.estoqueId,
          nome: value.nome,
          codigoBarras: value.codigoBarras,
          qntEstoque: value.quantidadeTotal,
          qntMinima: value.quantidadeMinima,
          categoriaId: 1,
          validade: value.validades[0].dataValidade,
          valor: value.valor
        });
        this.mensagemToast = "Produto encontrado com sucesso"

      },
      error: (err) =>{
        console.log(err)
      }})
    
    
    this.isToastOpen = isOpen;
  }


  buttonsAlert(edit: boolean){
    if(edit){
      this.alertButtons = [
        {
          text: 'OK',
          handler: () => {
            var idEstoque = this.formularioProduto.get('estoqueId')?.value
            console.log(idEstoque)
            this.router.navigate([`/estoque`, idEstoque, `produtos`])
          },
        }
      ];
    }else{
      this.alertButtons = [
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
  }
  

  carregaListas(){

    this.estoqueService.getAll().subscribe({
      next: (response) => {
        this.estoques = response
      },
      error: (err) => {
        console.log(err)
      }
     })
  }

}
