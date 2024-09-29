import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { EstoqueService } from 'src/app/service/estoque.service';
import { Estoque } from 'src/app/model/estoque';
import {
  home,
  homeOutline,
  list,
  listOutline,
  sadOutline,
  settings,
  settingsOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-controle-produto',
  templateUrl: './controle-produto.page.html',
  styleUrls: ['./controle-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ControleProdutoPage implements OnInit {
  formAcao: FormGroup;
  estoques: Estoque[] = [];
  acao: any[] = [
    { id: 1, nome: 'entrada' },
    { id: 2, nome: 'saida' },
  ];

  constructor(private router: Router, private estoqueService: EstoqueService) {
    addIcons({
      sadOutline,
      homeOutline,
      listOutline,
      settingsOutline,
      home,
      list,
      settings,
    });

    this.formAcao = new FormGroup({
      //form ação é onde cria os campos
      estoqueId: new FormControl('', [Validators.required]),
      acaoId: new FormControl('', [Validators.required]), // required obrigatórios pra poder enviar
    });
  }

  ngOnInit() {
    //ações que faz que é iniciado
    this.carregaListas();
  }

  onSubmit() {
    var estoque = this.formAcao.get('estoqueId')?.value;
    var acao = this.formAcao.get('acaoId')?.value;
    if (estoque != '' && acao != '') {
      console.log(this.formAcao.value);
      if (acao == 1) {
        this.router.navigate([`/produto/create`], {
          state: { estoqueId: Number(estoque) },
        });
      } else {
      }
    }
  }

  carregaListas() {
    this.estoqueService.getAll().subscribe({
      //liga estoque com back end e pega todos estoques cadatstrados
      next: (response) => {
        this.estoques = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
