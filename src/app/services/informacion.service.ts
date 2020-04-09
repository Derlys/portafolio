import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {


  cargada:boolean = false;
  equipo: any= [];
  info: any= [];
 

  constructor( private http: HttpClient) {

  this.cargarInfo();
  this.cargarEquipo();
  

  }
private cargarInfo() {
     this.http.get("https://portafolio-d2e65.firebaseio.com/footer.json")
    .subscribe ( (resp: any) =>

    {
      this.cargada = true;
      this.info= resp;
      console.log(resp);


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



