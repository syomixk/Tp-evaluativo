import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  public info: Producto[]

  constructor() {
    this.info = [
      {
        idProducto: "",
        nombre: "gatos",
        precio: 10000000000000000000000000000000000000000000000000000000000,
        descripcion: "gatos jaja",
        categoria: "felinos",
        imagen: "../../../../../assets/11ab6542-107e-4fef-87bc-d4be08f48ab4.jfif",
        alt: "nose"

      },
      {
        idProducto: "",
        nombre: "aaaa",
        precio: 1000000000000000000000000000,
        descripcion: "no",
        categoria: "ajksgbjau",
        imagen: "../../../../../assets/61ab59dd-3197-4f4c-a617-21d5fce517f8.jfif",
        alt: "nose"

      }

    ]

  }

}
