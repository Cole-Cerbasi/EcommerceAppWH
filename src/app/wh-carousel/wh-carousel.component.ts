import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { WhcardComponent } from '../whcard/whcard.component';

@Component({
  selector: 'app-wh-carousel',
  templateUrl: './wh-carousel.component.html',
  styleUrl: './wh-carousel.component.css'
})

export class WhCarouselComponent {
  cards: any[] = [];

  constructor(private ApiService: ApiService) {}

  chunkArray(array: any[], chunkSize: number): any[] {
    let chunks = [];

    var itemsPerSlide = chunkSize;
    var numSlides = Math.ceil(array.length / itemsPerSlide);

    for (var i = 0; i < numSlides; i++) {
      var slideStart = i * itemsPerSlide;
      var slideEnd = (i + 1) * itemsPerSlide;
      slideEnd = Math.min(slideEnd, array.length);

      var mini_chunk = [];
      for (var j = slideStart; j < slideEnd; j++) {
        mini_chunk.push(array[j]);
      }

      chunks.push(mini_chunk);
    }

    return chunks;

  }

  ngOnInit(): void{
    this.ApiService.getData().subscribe(r=>{

      //test api I was using wasnt array, just needed it to see if the result would come through
      var list = [
        {
          title: "Lord Solar Leontus",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "27",
          disfreq: "2",
          product_description: "Test product description. More of these will be put into the database later and get pulled via API.",
          image: "https://www.warhammer.com/app/resources/catalog/product/920x950/99120105095_AMLordSolarLeontus01.jpg"
        },
        {
          title: "D&D Underdark Paint Set",
          descr: "4.4",
          price: "22.00",
          oldpr: "45.00",
          review: "93",
          disfreq: "1",
          product_description: "Test product description. More of these will be put into the database later and get pulled via API.",
          image: "https://cdn.shoplightspeed.com/shops/635851/files/30927628/image.jpg"
        },
        {
          title: "Battle Systems: Fantasy",
          descr: "4.8",
          price: "13.00",
          oldpr: "45.00",
          review: "35",
          disfreq: "0",
          product_description: "Modular fantasy terrain for 28mm miniatures.",
          image: "https://m.media-amazon.com/images/I/81Bvk86d2xS._AC_UF894,1000_QL80_.jpg"
        },
        {
          title: "Product Four",
          descr: "5",
          price: "40.00",
          oldpr: "85.00",
          review: "33",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "Product Five",
          descr: "5",
          price: "10.00",
          oldpr: "25.00",
          review: "5",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "Product Six",
          descr: "5",
          price: "40.00",
          oldpr: "42.00",
          review: "19",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "Product Seven",
          descr: "5",
          price: "23.00",
          oldpr: "47.00",
          review: "23",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "Product Eight",
          descr: "5",
          price: "23.00",
          oldpr: "25.00",
          review: "50",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "Product Nine",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "40",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "Product Ten",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "50",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "Product Eleven",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "68",
          disfreq: "0",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        }
      ]

      var slides = this.chunkArray(list, 4);
      console.log(slides);

      this.cards = slides;
      console.log("whcarousel api: "+JSON.stringify(r)); //test result
    });
  }
}
