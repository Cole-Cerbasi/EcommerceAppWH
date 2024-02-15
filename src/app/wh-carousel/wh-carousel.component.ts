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
          title: "Item 1",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "3",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 2",
          descr: "5",
          price: "22.00",
          oldpr: "45.00",
          review: "3",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 3",
          descr: "5",
          price: "13.00",
          oldpr: "45.00",
          review: "5",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 4",
          descr: "5",
          price: "40.00",
          oldpr: "85.00",
          review: "33",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 5",
          descr: "5",
          price: "10.00",
          oldpr: "25.00",
          review: "5",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 6",
          descr: "5",
          price: "40.00",
          oldpr: "42.00",
          review: "19",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 7",
          descr: "5",
          price: "23.00",
          oldpr: "47.00",
          review: "23",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 8",
          descr: "5",
          price: "23.00",
          oldpr: "25.00",
          review: "50",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 9",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "40",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 10",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "50",
          image: "https://cdn-icons-png.freepik.com/512/4601/4601560.png"
        },
        {
          title: "test 11",
          descr: "5",
          price: "20.00",
          oldpr: "45.00",
          review: "68",
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
