import { Component } from '@angular/core';

import { InformacionService } from './services/informacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor ( public _is:InformacionService) {

  }
  
}
