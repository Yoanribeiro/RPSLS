import { Component, Input, ViewContainerRef }   from '@angular/core';
import { Observable, Subscription }             from 'rxjs';
import { Choice }                               from './entities/Choice';

@Component({
    selector: 'rpsls-app',
    templateUrl: './templates/app.html'
})
export class AppComponent {

    boardShowed   : boolean = false;
    gameFinished  : boolean = false;
    result        : string;

    constructor(){
    }

    showBoard()
    {
        this.boardShowed = true;
    }

    resultForward(resultToForward : string)
    {
        this.result = resultToForward;
        this.gameFinished = true;
    }

    goBack()
    {
        this.boardShowed = false;
        this.gameFinished = false;
        this.result = null;
    }
}
