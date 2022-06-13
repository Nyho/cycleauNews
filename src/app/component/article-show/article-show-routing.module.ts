import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleShowPage } from './article-show.page';

const routes: Routes = [
  {
    path: 'show',
    component: ArticleShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleShowPageRoutingModule {}
