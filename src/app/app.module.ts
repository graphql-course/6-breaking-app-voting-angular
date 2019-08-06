import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlModule } from './@core/modules/graphql/graphql.module';
import { CharactersComponent } from './@pages/characters/characters.component';
import { VotesComponent } from './@pages/votes/votes.component';
import { CardComponent } from './@core/components/card/card.component';
import { TruncatePipe } from './@core/pipes/truncate.pipe';
import { LoadingComponent } from './@core/components/loading/loading.component';
import { NavbarComponent } from './@core/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    VotesComponent,
    CardComponent,
    TruncatePipe,
    LoadingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphqlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
