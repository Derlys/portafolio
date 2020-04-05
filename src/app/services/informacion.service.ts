import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InfoPaginas} from '..//interfaces/info-paginas.interfaces'

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: InfoPaginas = {};
  cargada:boolean = false;

  constructor( private http: HttpClient) { 

    // leer archivo json

    this.http.get("assets/data/info-pagina.json")
    .subscribe ( (resp: InfoPaginas) =>
    
    {
      
      this.cargada = true;
      this.info= resp;
      console.log(resp);
    

    });
  }
}
  
  

