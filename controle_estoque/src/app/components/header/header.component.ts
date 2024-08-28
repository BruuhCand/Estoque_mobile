import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [IonicModule ],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

@Input() nomeHeader: string = "início";
@Output() menu = new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit() {}

  abrirMenu(){
      console.log("chegou aqui")
      this.menu.emit(true);
  }

}
