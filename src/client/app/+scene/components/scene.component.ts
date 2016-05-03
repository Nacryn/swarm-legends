import { Component } from 'angular2/core';

import { PlayersComponent } from '../../components/players/players.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'scene',
  templateUrl: 'app/+scene/components/scene.component.html',
  styleUrls: ['app/+scene/components/scene.component.css'],
  directives: [PlayersComponent, TimelineComponent]
})

export class SceneComponent {

}
