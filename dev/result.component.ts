import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { Observable, Subscription }             from 'rxjs';
import { Choice }                               from './entities/Choice';

@Component({
    selector: 'result-rpsls',
    templateUrl: './templates/result.html'
})
export class ResultComponent {
    @Input() result : string;
    @Output() back : EventEmitter<boolean> = new EventEmitter<boolean>();

    goBack()
    {
        this.back.emit(true);
    }
}
