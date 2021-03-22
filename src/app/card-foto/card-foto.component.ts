import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-foto',
  templateUrl: './card-foto.component.html',
  styleUrls: ['./card-foto.component.scss']
})
export class CardFotoComponent implements OnInit {
  images: any = [];
  constructor() { }

  ngOnInit(): void {
    this.images = JSON.parse(localStorage.getItem('myImages'));
  }

  remove(image): void {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].url === image.url) {
        this.images.splice(i, 1);
        localStorage.setItem('myImages', JSON.stringify(this.images));
      }
    }
  }

}
