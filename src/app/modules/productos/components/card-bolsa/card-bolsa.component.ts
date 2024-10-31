import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';



@Component({
  selector: 'app-card-bolsa',
  templateUrl: './card-bolsa.component.html',
  styleUrls: ['./card-bolsa.component.css']
})
export class CardBolsaComponent {
  coleccionProductos: Producto[] = [];

  coleccionBolsas: Producto[] = [];

  // Variable local para seleccionar un producto específico
  productoSeleccionado!: Producto;

  // Variable local para manejar estado de un modal
  modalVisible: boolean = false;




  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
      
    this.metodobolsas();
    })

  }

  metodobolsas() {
    this.coleccionProductos.forEach(producto => {
        if(producto.categoria === "Bolsas"){
          this.coleccionBolsas.push(producto);
        }
      })
  }



  // Función para mostrar más información de los productos
  mostrarVer(info: Producto) {
    // Cambio estado del modal a true (ahora es visible)
    this.modalVisible = true;

    // Guardo en variable seleccionado la información de producto elegido
    this.productoSeleccionado = info;
  }

}


