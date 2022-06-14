/* eslint-disable no-trailing-spaces */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../global';
import { Observable } from 'rxjs';
import { Article } from '../../class/Article/article';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private uri = `${Globals.appApiUrl}/article-api`;

  constructor(private http: HttpClient) {}

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(`${this.uri}/show/` + id);
  }

  getArticles(page, limit = 10, count = false): Observable<Article[]> {
    const eventId = 26;
    return this.http.get<Article[]>(`${this.uri}/list/` + eventId + '/' + page + '/' + limit + '/' + count);
  }
}
