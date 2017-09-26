import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Angular Firebase Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// Components Application Imports
import { AppComponent } from './components/main/app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './components/shared/error-404/error-404.component';
import { ResultListComponent } from './components/results/result-list/result-list.component';
import { ResultDetailComponent } from './components/results/result-detail/result-detail.component';
import { FullDetailComponent } from './components/details/full-detail/full-detail.component';
import { MapDetailComponent } from './components/details/map-detail/map-detail.component';
// Services Application Imports
import { SearchService } from './services/search/search.service';
import { environment } from '../environments/environment';
import { MainMenuComponent } from './components/shared/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    Error404Component,
    ResultListComponent,
    ResultDetailComponent,
    FullDetailComponent,
    MapDetailComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG)
  ],
  providers: [
    SearchService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
