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
  private eventId = 26;

  constructor(private http: HttpClient) {}

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(`${this.uri}/show/` + id);
  }

  getArticles(page, limit = 10, count = false): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.uri}/list/` + this.eventId + '/' + page + '/' + limit + '/' + count);
  }

  searchArticle(page, limit = 10, count = false, keyword = ''): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.uri}/search/` + this.eventId + '/' + page + '/' + limit + '/' + count + '/' + keyword);
  }
}
