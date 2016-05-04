import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { SceneComponent } from '../+scene/index';
import { DashboardComponent } from '../+dashboard/index';
import { PlayerService } from '../shared/players.service';
import { PostService } from './timeline/posts.service';

@Component({
  selector: 'swarm-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Scene']">Scene</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/components/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PlayerService,
    PostService
  ]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/scene',
    name: 'Scene',
    component: SceneComponent,
  }
])

export class AppComponent {
  title = 'Swarming application';
}
