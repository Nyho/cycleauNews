import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news/news.service';
import { Article } from '../../class/Article/article';
import { Globals } from '../../global';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  public articleList: Article[] = [];
  public assetPath = `${Globals.appApiUrl}`;

  constructor(
    private newsService: NewsService,
  )
  {}

  ngOnInit() {
    this.newsService.getArticles()
      .subscribe((articles: Article[]) => {
        for (const item of articles) {
          this.articleList.push(item);
        }
      });
  }
}
