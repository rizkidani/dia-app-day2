import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileDetailComponent } from './component/profile-detail/profile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ProfileComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
