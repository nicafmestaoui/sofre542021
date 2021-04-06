import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { WordComponent } from './directives/word/word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoWayComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailComponent,
    NgstyleComponent,
    WordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    BtcToUsdPipe,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
