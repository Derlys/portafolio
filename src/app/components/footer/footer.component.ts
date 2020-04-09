import { Component } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent  {

  anio:number = new Date().getFullYear();

  constructor (public _isService:InformacionService){}

  ngOnInit(){

  }

  
}
