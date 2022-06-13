import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Article } from '../class/Article/article';
import { Observable } from 'rxjs';
import { NewsService } from '../service/news/news.service';

@Injectable()

export class ArticleShowResolver implements Resolve<Article> {
  constructor(private service: NewsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article>|Promise<Article>|Article {
    return this.service.getArticle(route.paramMap.get('id'));
  }
}
