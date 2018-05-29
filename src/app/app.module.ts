import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { SubsubComponent } from './sub/subsub/subsub.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'blog', component : BlogComponent },
  { path : 'contact', component : ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    SubsubComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
