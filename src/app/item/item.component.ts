import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() itemData: any;
  constructor(){
    this.itemData = {};
  }
  ngOnInit(): void{
    this.itemData.specid = this.itemData.idwh_item+btoa(this.itemData.name.toLowerCase()).replace(/[=\s]/g, "");

    const dmp: { [key: string]: string } = {
      "2": "Rarely Discounted",
      "1": "",
      "0": ""
    };

    this.itemData.disfreq = dmp[this.itemData.disfreq as keyof typeof dmp];

  }
}
