import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { Observable, Subscription }             from 'rxjs';
import { Choice }                               from './entities/Choice';

@Component({
    selector: 'board-rpsls',
    templateUrl: './templates/board.html'
})
export class BoardComponent {
    @Output() result : EventEmitter<string> = new EventEmitter<string>();
    gameStarted   : boolean = false;
    optionPlayer1 : Choice;
    optionPlayer2 : Choice;
    streamTimer : Observable<number>;
    timerSubscription : Subscription;

    constructor(){
    }

    chooseOption(option : Choice)
    {
        if(!this.optionPlayer1)
        {
            this.optionPlayer1 = option;
            this.timerSubscription.unsubscribe();
            this.startPlaying();
        }
        else
        {
            this.optionPlayer2 = option;
            this.decideResult();
        }
    }

    decideResult()
    {
        switch(this.optionPlayer1)
        {
            case Choice.Rock:
                switch(this.optionPlayer2)
                {
                    case Choice.Scissors:
                    case Choice.Lizard:
                        this.result.emit("Player 1 wins");
                    break;
                    case Choice.Rock:
                        this.result.emit("Tie");
                    break;
                    default:
                        this.result.emit("Player 2 wins");
                }
            break;
            case Choice.Paper:
                switch(this.optionPlayer2)
                {
                    case Choice.Rock:
                    case Choice.Spock:
                        this.result.emit("Player 1 wins");
                    break;
                    case Choice.Paper:
                        this.result.emit("Tie");
                    break;
                    default:
                        this.result.emit("Player 2 wins");
                }
            break;
            case Choice.Scissors:
                switch(this.optionPlayer2)
                {
                    case Choice.Paper:
                    case Choice.Lizard:
                        this.result.emit("Player 1 wins");
                    break;
                    case Choice.Scissors:
                        this.result.emit("Tie");
                    break;
                    default:
                        this.result.emit("Player 2 wins");
                }
            break;
            case Choice.Lizard:
                switch(this.optionPlayer2)
                {
                    case Choice.Spock:
                    case Choice.Paper:
                        this.result.emit("Player 1 wins");
                    break;
                    case Choice.Lizard:
                        this.result.emit("Tie");
                    break;
                    default:
                        this.result.emit("Player 2 wins");
                }
            break;
            case Choice.Spock:
                switch(this.optionPlayer2)
                {
                    case Choice.Scissors:
                    case Choice.Rock:
                        this.result.emit("Player 1 wins");
                    break;
                    case 5:
                        this.result.emit("Tie");
                    break;
                    default:
                        this.result.emit("Player 2 wins");
                }
            break;
        }
        this.gameStarted = false;
        this.optionPlayer1 = null;
        this.optionPlayer2 = null;
        this.timerSubscription.unsubscribe();
    }

    startPlaying()
    {
        this.streamTimer = Observable.timer(0,1000).map((x)=>x+1);
        this.timerSubscription = this.streamTimer.subscribe(
            (next) => {
                if(next == 4)
                    if(!this.optionPlayer1)
                    {
                        this.chooseOption(Choice.Rock);
                    }
                    else
                        if(this.optionPlayer1 && !this.optionPlayer2)
                        {
                            this.chooseOption(Choice.Rock);
                        }
            }
        );

        this.gameStarted = true;
    }
}
