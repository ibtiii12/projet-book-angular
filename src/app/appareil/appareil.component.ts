import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string; 
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {        
  }

  getStatus() {
    return this.appareilStatus; 
  }

  getColor() {   
  return 'green';
    if(this.appareilStatus === 'allumé') {    // retourner la situation de l'appareil si allumee alors afficher couleur vert sinon rouge.
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}  
    
onSwitch() {
  if(this.appareilStatus === 'allumé') {
    this.appareilService.switchOffOne(this.index); // si allumee alors bouton on sinon bouton off
  } else if(this.appareilStatus === 'éteint') {
    this.appareilService.switchOnOne(this.index);
  }
}

 

}
