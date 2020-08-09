import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  appareils: any[];

  lastUpdate = new Date();
  constructor(private appareilService: AppareilService) { // apres 4000ms de l'affichage de la liste des appareils , le bouton submit va s'apparaitre.
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  
  ngOnInit() {
    this.appareils = this.appareilService.appareils; // afficher la liste des appareils.
  
  }

  onAllumer() {
    this.appareilService.switchOnAll(); // allumer l'appareil speciphique.
}
onEteindre() {
  if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) { // eteindre l'appareil specifique.
    this.appareilService.switchOffAll();
  } else {
    return null;
  }
}

}
