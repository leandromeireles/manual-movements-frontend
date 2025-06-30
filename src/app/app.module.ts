import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MovimentoComponent} from './components/movimento.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [AppComponent, MovimentoComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatButtonModule, BrowserAnimationsModule, FormsModule, MatTableModule, MatSelectModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}