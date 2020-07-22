import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos: any = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos()
      .subscribe(data => {
        console.log(data);
        this.photos = data;
      })
  }

  async filters(limit: HTMLInputElement, page: HTMLInputElement) {
    this.photosService.getPhotos(limit.value, page.value)
      .subscribe(data => {
        console.log(data);
        this.photos = data;
      })
  }

}
