"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var Choice_1 = require("./entities/Choice");
var BoardComponent = (function () {
    function BoardComponent() {
        this.result = new core_1.EventEmitter();
        this.gameStarted = false;
    }
    BoardComponent.prototype.chooseOption = function (option) {
        if (!this.optionPlayer1) {
            this.optionPlayer1 = option;
            this.timerSubscription.unsubscribe();
            this.startPlaying();
        }
        else {
            this.optionPlayer2 = option;
            this.decideResult();
        }
    };
    BoardComponent.prototype.decideResult = function () {
        switch (this.optionPlayer1) {
            case Choice_1.Choice.Rock:
                switch (this.optionPlayer2) {
                    case Choice_1.Choice.Scissors:
                    case Choice_1.Choice.Lizard:
                        this.result.emit("Player 1 wins");
                        break;
                    case Choice_1.Choice.Rock:
                        this.result.emit("Tie");
                        break;
                    default:
                        this.result.emit("Player 2 wins");
                }
                break;
            case Choice_1.Choice.Paper:
                switch (this.optionPlayer2) {
                    case Choice_1.Choice.Rock:
                    case Choice_1.Choice.Spock:
                        this.result.emit("Player 1 wins");
                        break;
                    case Choice_1.Choice.Paper:
                        this.result.emit("Tie");
                        break;
                    default:
                        this.result.emit("Player 2 wins");
                }
                break;
            case Choice_1.Choice.Scissors:
                switch (this.optionPlayer2) {
                    case Choice_1.Choice.Paper:
                    case Choice_1.Choice.Lizard:
                        this.result.emit("Player 1 wins");
                        break;
                    case Choice_1.Choice.Scissors:
                        this.result.emit("Tie");
                        break;
                    default:
                        this.result.emit("Player 2 wins");
                }
                break;
            case Choice_1.Choice.Lizard:
                switch (this.optionPlayer2) {
                    case Choice_1.Choice.Spock:
                    case Choice_1.Choice.Paper:
                        this.result.emit("Player 1 wins");
                        break;
                    case Choice_1.Choice.Lizard:
                        this.result.emit("Tie");
                        break;
                    default:
                        this.result.emit("Player 2 wins");
                }
                break;
            case Choice_1.Choice.Spock:
                switch (this.optionPlayer2) {
                    case Choice_1.Choice.Scissors:
                    case Choice_1.Choice.Rock:
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
    };
    BoardComponent.prototype.startPlaying = function () {
        var _this = this;
        this.streamTimer = rxjs_1.Observable.timer(0, 1000).map(function (x) { return x + 1; });
        this.timerSubscription = this.streamTimer.subscribe(function (next) {
            if (next == 4)
                if (!_this.optionPlayer1) {
                    _this.chooseOption(Choice_1.Choice.Rock);
                }
                else if (_this.optionPlayer1 && !_this.optionPlayer2) {
                    _this.chooseOption(Choice_1.Choice.Rock);
                }
        });
        this.gameStarted = true;
    };
    return BoardComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BoardComponent.prototype, "result", void 0);
BoardComponent = __decorate([
    core_1.Component({
        selector: 'board-rpsls',
        templateUrl: './templates/board.html'
    }),
    __metadata("design:paramtypes", [])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map