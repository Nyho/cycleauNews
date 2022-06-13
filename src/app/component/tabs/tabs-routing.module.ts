import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ArticleShowResolver } from '../../resolver/article-show.resolver';

const routes: Routes = [
  {
    path: 'cycleau-news',
    component: TabsPage,
    children: [
      {
        path: 'news-list',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'news-search',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'create-article',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'show-article/:id',
        loadChildren: () => import('../article-show/article-show.module').then(m => m.ArticleShowPageModule),
        resolve: {
          articleShow: ArticleShowResolver
        }
      },
      {
        path: '',
        redirectTo: '/cycleau-news/news-list',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/cycleau-news/news-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ArticleShowResolver]
})
export class TabsPageRoutingModule {}
