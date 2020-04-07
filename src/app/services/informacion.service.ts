import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InfoPaginas} from '..//interfaces/info-paginas.interfaces'

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info: InfoPaginas = {};
  cargada:boolean = false;
  equipo: any= [];

  constructor( private http: HttpClient) { 

  this.cargarInfo();
  this.cargarEquipo();

    
  }
  private cargarInfo() {
    this.http.get("assets/data/info-pagina.json")
    .subscribe ( (resp: InfoPaginas) =>
    
    {
      
      this.cargada = true;
      this.info= resp;
      // console.log(resp);
    

    });
    
  }
  private cargarEquipo() {

    this.http.get("https://portafolio-d2e65.firebaseio.com/equipo.json")
    .subscribe ( (resp: any)=>
    
    {
      
     
      this.equipo= resp;
      console.log(resp);
    

    });

    
  }
}
  
  

