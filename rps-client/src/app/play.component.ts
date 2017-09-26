import { Component } from '@angular/core';

import { Game } from './game';
import { GameService } from './game.service';

@Component({
    selector: 'play-component',
    templateUrl: './play.component.html',
    providers: [GameService]
})
export class PlayComponent {

    game: Game;

    constructor(private gameService: GameService) {}

    createNewGame(gameId): void {
        if (!gameId) {
            alert("No game id specified");
        }

        this.gameService.newGame(gameId)
            .then(game => this.game = game)
            .catch(error => alert(error.message));
    }
}
