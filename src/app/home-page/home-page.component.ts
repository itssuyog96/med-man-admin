import { Component } from '@angular/core';
import { APP } from '../app.constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  appName = APP.name || 'app-name-space';
}
