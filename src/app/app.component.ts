import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify';
  nombre: string = 'David'
  edad: number = 40
  telefono: null = null
  direccion: undefined = undefined
  otros: any;
  /* 
  car: CarModel = {
    brand: 'Ford',
    model: 'Focus',
    year: 2022
  }
  carList: Array<CarModel> = [{
    brand: 'Nisan',
    model: 'Salon',
    year: 2020
  },
  {
    brand: 'Toyota',
    model: 'Silver 2000',
    year: 2021
  }]*/
}
