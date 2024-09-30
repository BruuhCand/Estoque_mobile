import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule,  ModalController  } from '@ionic/angular';
import { Validade } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-validades-produto',
  templateUrl: './validades-produto.component.html',
  styleUrls: ['./validades-produto.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ValidadesProdutoComponent  implements OnInit {

  @Input() produto: any; // Produto enviado como input
  form: FormGroup;
  produtosVal: Validade[] = []

  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private produtoService: ProdutoService) {
    this.form = this.fb.group({
      validades: this.fb.array([]) // Inicializa o FormArray
    });
  }

  ngOnInit() {
    this.validadesProduto(); // Chama a função para carregar as validades
  }

  validadesProduto() {
    console.log("produto id:", this.produto.id);
    this.produtoService.getValidades(this.produto.id).subscribe({
      next: (value) => {
        console.log("value:", value);
        this.produtosVal = value;

        // Chama o método para adicionar as validades ao FormArray depois de receber os dados
        this.adicionaArray();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  adicionaArray() {
    this.produtosVal.forEach((validade: any) => {
      this.validades.push(
        this.fb.group({
          id: [validade.id],
          validade: [validade.dataValidade, Validators.required],
          quantidade: [0, [Validators.required, Validators.min(0), Validators.max(validade.quantidade)]]
        })
      );
    });
    console.log("FormArray atualizado:", this.validades);
  }

  // Getter para o FormArray
  get validades(): FormArray {
    return this.form.get('validades') as FormArray;
  }

  getQuantidadeOptions(max: number): number[] {
    return Array.from({ length: max + 1 }, (_, i) => i);
  }
  
  onQuantidadeChange(event: any, index: number) {
    console.log(`Quantidade selecionada para validade ${index}:`, event.detail.value);
    this.validades.at(index).get('quantidade')?.setValue(event.detail.value); // Atualiza o valor manualmente
  }

  // Fecha o modal e retorna os valores selecionados
  fecharComOk() {
    if (this.form.valid) {
      this.modalCtrl.dismiss(this.form.value); // Retorna o array com as quantidades, validades e IDs
    }
  }

  // Fecha o modal sem retornar nada
  fecharModal() {
    this.modalCtrl.dismiss();
  }
}
