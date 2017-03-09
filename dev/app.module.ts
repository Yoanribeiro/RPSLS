import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { FormsModule }                          from '@angular/forms';
import { HttpModule, JsonpModule }              from '@angular/http';

import { AppComponent }                     from './app.component';
import { BoardComponent }                   from './board.component';
import { ResultComponent }                  from './result.component';
//External provider

@NgModule({
    imports:        [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        JsonpModule
                    ],
    declarations:   [
                        AppComponent,
                        BoardComponent,
                        ResultComponent
                    ],
    providers :     [ ],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }
