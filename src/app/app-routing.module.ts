import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/shared/error-404/error-404.component';
import { FullDetailComponent } from './components/details/full-detail/full-detail.component';


const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'country/:countryName/detail',
    component: FullDetailComponent
  },
  {
    path: '404',
    component: Error404Component,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
