import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageNavComponent } from './Components/main-page-nav/main-page-nav.component';
import { WhistleCardComponent } from './Components/whistle-card/whistle-card.component';
import { LeaderBoardComponent } from './Components/leader-board/leader-board.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageNavComponent,
    WhistleCardComponent,
    LeaderBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
