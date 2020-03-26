import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const CONFIG = {
  shortName: 'carina-collective',
  apiKey: 'mgSs79ADu2ocMEi2HYPhsyJXMjMphZ6Vhl2YYUy82XpvWql2Zq4mYyq1BmokYsSa'
};

const BASE_URL = 'https://disqus.com/api/3.0/';

const COMMENTS_URL = BASE_URL + 'forums/listThreads.json?forum=' + CONFIG.shortName + '&api_key=' + CONFIG.apiKey;

@Injectable({
  providedIn: 'root'
})
export class DisqusService {
  constructor(private http: HttpClient) { }

  requestComments() {
    return this.http.get(COMMENTS_URL, {responseType: 'json'});
  }
}
