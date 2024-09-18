import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, homeOutline, homeSharp, cubeOutline, cubeSharp, settingsOutline, settingsSharp, analyticsOutline, analyticsSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Estoques', url: '/folder/outbox', icon: 'home' },
    { title: 'Controle produto', url: '/folder/inbox', icon: 'cube' },
    { title: 'Histórico', url: '/folder/favorites', icon: 'analytics' },
    { title: 'Configurações', url: '/folder/archived', icon: 'settings' },
  ];
  constructor() {
    addIcons({ cubeOutline, cubeSharp, homeOutline, homeSharp, settingsOutline, settingsSharp, analyticsOutline, analyticsSharp});
  }
}
