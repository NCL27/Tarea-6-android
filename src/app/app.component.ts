import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Herramientas', url: '/home', icon: 'home' },
    { title: 'Nombre Genero', url: '/gender', icon: 'transgender' },
    { title: 'Nombre Edad', url: '/age', icon: 'people' },
    { title: 'País', url: '/country', icon: 'map' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'News', url: '/news', icon: 'newspaper'},
    { title: 'Acerca De', url: '/about', icon: 'alert' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
