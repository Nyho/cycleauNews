import {Component, OnInit, ViewChild} from '@angular/core';
import { NewsService } from '../../service/news/news.service';
import { Article } from '../../class/Article/article';
import { Globals } from '../../global';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public articleList: Article[] = [];
  public assetPath = `${Globals.appApiUrl}`;
  public page = 1;
  private totalCount;

  constructor(
    private newsService: NewsService,
  )
  {}

  ngOnInit() {
    this.newsService.getArticles(this.page, 3, true)
      .subscribe((articles: Article[]) => {

        if (Array.isArray(articles)) {
          for (const item of articles) {
            if (item.totalCount) {
              this.totalCount = item.totalCount;
            } else {
              this.articleList.push(item);
            }
          }
        } else {
          this.articleList.push(articles);
        }
      });
  }

  onError(error) {
    console.log(error);
  }

  onComplete(event) {
    event.target.complete();

    if (this.articleList.length === this.totalCount) {
      event.target.disabled = true;
    }
  }

  loadData(event, page) {
    this.page = page + 1;

    this.newsService.getArticles(this.page, 3)
      .subscribe((articles: Article[]) => {

        if (Array.isArray(articles)) {
          for (const item of articles) {
            if (!item.totalCount) {
              this.articleList.push(item);
            }
          }
        } else {
          this.articleList.push(articles);
        }

      }, (error: any) => {
        this.onError(error);
      }, () => {
        this.onComplete(event);
      });
  }
}
