import {CHARACTERS} from './mock-characters';
import {Injectable} from 'angular2/core';

@Injectable()
export class CharacterService {
  getCharacters() {
    return Promise.resolve(CHARACTERS);
  }

  getCharacter(id: number) {
    return Promise.resolve(CHARACTERS).then(
      characters => characters.filter(character => character.id === id)[0]
    );
  }

}
