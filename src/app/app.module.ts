import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import {NgComponent} from './ng/ng.component';
import { PersonComponent } from './person/person.component';
import { ListpersonComponent } from './listperson/listperson.component';


@NgModule({
  declarations: [
    AppComponent,
    TwowaybindingComponent,
    NgComponent,
    PersonComponent,
    ListpersonComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
