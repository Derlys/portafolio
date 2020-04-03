import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  info:any = {};
  cargada:boolean = false;

  constructor( public HttpClient: HttpClient) { 

    this.HttpClient.get("assets/data/info.data.json")
    .subscribe ( data =>{
      console.log(data);
      this.cargada= true;
    

    })
  }
}
