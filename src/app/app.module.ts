import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskboardService } from './taskboard.service';

import { TaskboardComponent }  from './taskboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TaskboardComponent
  ],
  providers: [TaskboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
