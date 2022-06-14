import { Component, OnInit } from '@angular/core';
import { Globals } from '../../global';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../class/Article/article';

@Component({
  selector: 'app-article-show',
  templateUrl: './article-show.page.html',
  styleUrls: ['./article-show.page.scss'],
})

export class ArticleShowPage implements OnInit {
  public assetPath = `${Globals.appApiUrl}`;
  public article: Article;

  constructor(
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.article = data.articleShow;
    });
  }
}
