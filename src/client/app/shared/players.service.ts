import {PLAYERS} from './mock-players';
import {Injectable} from 'angular2/core';

@Injectable()
export class PlayerService {
  getPlayers() {
    return Promise.resolve(PLAYERS);
  }

  getPlayer(id: number) {
    return Promise.resolve(PLAYERS).then(
      players => players.filter(player => player.id === id)[0]
    );
  }
}
