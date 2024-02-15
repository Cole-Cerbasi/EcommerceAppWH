import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whcard',
  templateUrl: './whcard.component.html',
  styleUrl: './whcard.component.css'
})

export class WhcardComponent {
  @Input() cardData: any;

  constructor(){
    this.cardData = {};
  }
}
