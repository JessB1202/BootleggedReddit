import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RequestDataService } from './request-data.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RequestDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
