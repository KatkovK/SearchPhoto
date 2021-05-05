import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myImages: string[] = [];
  images: string[] = [];
  keyword: string;
  page: number = 1;
  length: number = 0;
  size:number = 6;

  constructor(private restSevice: RestService) { }

  ngOnInit(): void {
    const savedImages = localStorage.getItem('myImages');
    this.myImages = savedImages ? JSON.parse(savedImages) : this.myImages;
  }

  search(event: any): void {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.restSevice.searchFoto(this.keyword, this.size, this.page)
        .subscribe(res => {
          this.length = res.photos.pages * this.size;
          this.images = res.photos.photo;
        });
    }
  }

  addImage(image): void {
    this.myImages.push(image);
    localStorage.setItem('myImages', JSON.stringify(this.myImages));
  }

  getNextPageImages(event): void {
    this.size = event.pageSize;
    this.page = event.pageIndex;
    this.restSevice.searchFoto(this.keyword, this.size, this.page)
      .subscribe(res => {
        this.length = res.photos.pages * this.size;
        this.images = res.photos.photo;
      });
  }
}