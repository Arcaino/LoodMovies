import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ListasService } from './pages/listas.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule
  ],
  providers: [ListasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
