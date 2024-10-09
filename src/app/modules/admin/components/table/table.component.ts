import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto'
import { ServicesService } from 'src/app/modules/autentificacion/services/services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  productoCollection: Producto[] = [];


  productoSeleccionado!: Producto;

  modalVisibleproducto: boolean = false;



  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public serviciocrud: CrudService) { }
  ngOnInit(): void { }

  async agregarProducto() {





    if (this.producto.valid) {

      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!


      }
      await this.serviciocrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert
            ("Ha agregado un nuevo producto con exito");

        })



    }



  }
  mostrarBorrar(productoSeleccionado: Producto){
    this.modalVisibleproducto = true;

    this.productoSeleccionado = productoSeleccionado;
  }

}
