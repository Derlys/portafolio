import { Component, OnInit} from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent implements OnInit{
  constructor (public _isService:InformacionService){}

  ngOnInit(){

  }

 
}
