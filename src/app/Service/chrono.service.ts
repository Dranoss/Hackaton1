import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChronoService {

  public chrono: number[];
  constructor() { }

  setChrono(value: number[]){
    this.chrono = value;
  }

  getChrono(){
    return this.chrono;
  }
}
