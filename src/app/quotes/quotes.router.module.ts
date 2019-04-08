import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesPage } from './quotes.page';


const routes: Routes = [
  {
    path: 'quotes',
    component: QuotesPage,
    children: [
      {
        path: 'quotes-detail',
        children: [
          {
            path: '',
            loadChildren: '../quotes-detail/quotes-detail.module#QuotesDetailPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/quotes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/quotes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QuotesPageRoutingModule {}
