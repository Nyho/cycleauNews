import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../../class/Article/article';
import { NewsService } from '../../service/news/news.service';
import { Globals } from '../../global';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  public articleList: Article[] = [];
  public assetPath = `${Globals.appApiUrl}`;
  public page = 1;
  private totalCount;

  constructor(
    public formBuilder: FormBuilder,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    this.articleList = [];

    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      this.newsService.searchArticle(this.page, 3, true, this.ionicForm.value.name)
        .subscribe((articles: Article[]) => {

          if (Array.isArray(articles)) {
            for (const item of articles) {
              if (item.totalCount !== undefined) {
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
  }
}
