import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  api_url = environment.site_url + environment.quotes_url;

  constructor(public http: HttpClient) { }

  getQuotes() {
    return this.http.get(this.api_url);
  }
}
