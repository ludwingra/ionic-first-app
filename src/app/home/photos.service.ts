import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(limit?: string, page?: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_limit=${limit ? limit : 15}&_page=${page ? page : 1}`);
  }

}
