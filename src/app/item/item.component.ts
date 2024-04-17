import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @ViewChild('linkContainer') linkcontainer: ElementRef<HTMLDivElement> = {} as ElementRef;
  link: { link: string, link_name: string }[] = [];

  @Input() itemData: any;
  constructor(){
    this.itemData = {};
    //this.linkContainer = new ElementRef;
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

  ngAfterViewInit(){
    this.link = this.itemData.links;
    console.log(this.linkcontainer);
    this.linkcontainer.nativeElement.innerHTML = this.link.map(link => `<button class="btn btn-sm subtle-underline w-100 text-end" onclick="window.open('${link.link}', '_blank').focus()">${link.link_name} <i class="fa fa-external-link" aria-hidden="true"></i></button>`).join(' ');
  }
}
