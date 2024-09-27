import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent  implements OnInit {

  constructor(private toastController: AbortController) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
