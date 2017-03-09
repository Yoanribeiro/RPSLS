"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var result_component_1 = require("./result.component");
var testing_2 = require("@angular/core/testing");
var board_component_1 = require("./board.component");
var Choice_1 = require("./entities/Choice");
describe('App', function () {
    var appComp;
    var boardComp;
    var fixtureApp;
    var fixtureBoard;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, board_component_1.BoardComponent, result_component_1.ResultComponent],
            providers: [
                { provide: testing_2.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixtureApp = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        appComp = fixtureApp.componentInstance;
        fixtureBoard = testing_1.TestBed.createComponent(board_component_1.BoardComponent);
        boardComp = fixtureBoard.componentInstance;
    });
    it('should work', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
    });
    it('rock should win against lizard', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Rock);
        boardComp.chooseOption(Choice_1.Choice.Lizard);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('rock should win against scissors', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Rock);
        boardComp.chooseOption(Choice_1.Choice.Scissors);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('paper should win against spock', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Paper);
        boardComp.chooseOption(Choice_1.Choice.Spock);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('paper should win against rock', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Paper);
        boardComp.chooseOption(Choice_1.Choice.Rock);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('scissors should win against lizard', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Scissors);
        boardComp.chooseOption(Choice_1.Choice.Lizard);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('scissors should win against paper', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Scissors);
        boardComp.chooseOption(Choice_1.Choice.Paper);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('lizard should win against spock', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Lizard);
        boardComp.chooseOption(Choice_1.Choice.Spock);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('lizard should win against paper', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Lizard);
        boardComp.chooseOption(Choice_1.Choice.Paper);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('spock should win against rock', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Spock);
        boardComp.chooseOption(Choice_1.Choice.Rock);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it('spock should win against scissors', function () {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice_1.Choice.Spock);
        boardComp.chooseOption(Choice_1.Choice.Scissors);
        boardComp.result.subscribe(function (msg) {
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
});
//# sourceMappingURL=app.component.spec.js.map