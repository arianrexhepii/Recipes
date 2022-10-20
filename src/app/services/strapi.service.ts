import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  constructor(
    handler: HttpBackend,
    private http: HttpClient,
  ) {
    this.http = new HttpClient(handler);

  }

  private API_URL = environment.cmsUrl;
  createRecipes(data: any): Observable<any> {
    return this.http.post(this.API_URL + '/api/recipes-lists?populate=*', data)
  }
  getAllRecipesList(): Observable<any> {
    return this.http.get(this.API_URL + '/api/recipes-lists?populate=*')
  }
  deleteRecipes(id): Observable<any> {
    return this.http.delete(this.API_URL + '/api/recipes-lists/' + id);
  }
}
