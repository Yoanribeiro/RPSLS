import {} from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';
import { ResultComponent } from './result.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { Choice }       from './entities/Choice';

describe('App', () => {
    let appComp:    AppComponent;
    let boardComp : BoardComponent;
    let fixtureApp: ComponentFixture<AppComponent>;
    let fixtureBoard: ComponentFixture<BoardComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
                                            declarations: [AppComponent,BoardComponent,ResultComponent],
                                            providers: [
                                                           { provide: ComponentFixtureAutoDetect, useValue: true }
                                                       ]
                                       });
        fixtureApp = TestBed.createComponent(AppComponent);
        appComp = fixtureApp.componentInstance;
        fixtureBoard = TestBed.createComponent(BoardComponent);
        boardComp = fixtureBoard.componentInstance;
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
    it ('rock should win against lizard', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Rock);
        boardComp.chooseOption(Choice.Lizard);
        boardComp.result.subscribe((msg)=>{
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it ('rock should win against scissors', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Rock);
        boardComp.chooseOption(Choice.Scissors);
        boardComp.result.subscribe((msg)=>{
            expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it ('paper should win against spock', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Paper);
        boardComp.chooseOption(Choice.Spock);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it ('paper should win against rock', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Paper);
        boardComp.chooseOption(Choice.Rock);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it ('scissors should win against lizard', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Scissors);
        boardComp.chooseOption(Choice.Lizard);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it ('scissors should win against paper', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Scissors);
        boardComp.chooseOption(Choice.Paper);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });

    it ('lizard should win against spock', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Lizard);
        boardComp.chooseOption(Choice.Spock);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it ('lizard should win against paper', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Lizard);
        boardComp.chooseOption(Choice.Paper);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });

    it ('spock should win against rock', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Spock);
        boardComp.chooseOption(Choice.Rock);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });
    it ('spock should win against scissors', () => {
        boardComp.startPlaying();
        boardComp.chooseOption(Choice.Spock);
        boardComp.chooseOption(Choice.Scissors);
        boardComp.result.subscribe((msg)=>{
                expect(msg).toBe("Player 1 wins", 'Player 1 should win');
        });
    });


});
