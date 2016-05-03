import { Component, OnInit } from 'angular2/core';

import { Player } from './player';
import { PlayerService } from './players.service';

@Component ({
  selector: 'players',
  templateUrl: 'app/components/players/players.component.html',
  styleUrls : ['app/components/players/players.component.css']
})

export class PlayersComponent implements OnInit {
  players: Player[];
  selectedPlayer: Player;

  constructor(private _playerService: PlayerService) { }

  getPlayers() {
    this._playerService.getPlayers().then(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
  }
}
