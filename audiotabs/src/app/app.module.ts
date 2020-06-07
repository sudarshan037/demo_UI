import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndianhindiComponent } from './indianhindi/indianhindi.component';
import { IndianenglishComponent } from './indianenglish/indianenglish.component';
import { HttpClientModule } from '@angular/common/http';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { PreUploadedComponent } from './pre-uploaded/pre-uploaded.component';
@NgModule({
  declarations: [
    AppComponent,
    IndianhindiComponent,
    IndianenglishComponent,
    AudioPlayerComponent,
    PreUploadedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
