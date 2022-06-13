import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleShowPage } from './article-show.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ArticleShowPageRoutingModule } from './article-show-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArticleShowPage
      }
    ]),
    ArticleShowPageRoutingModule
  ],
  declarations: [ArticleShowPage]
})
export class ArticleShowPageModule {}
