import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private productocollection: AngularFirestoreCollection<Producto>
  constructor(private database: AngularFirestore) {
    this.productocollection = database.collection('producto')
  }
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        const idproducto = this.database.createId()
        producto.idProducto = idproducto
        const resultado = await this.productocollection.doc(idproducto)
        resolve(resultado)
      }
      catch (error) {
        reject(error)
      }
    }
    )
  }
  obtenerproducto() {
    return this.productocollection.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data)))
  }

  modificarProducto(idproducto: string, nuevaData: Producto) {
    return this.database.collection('producto').doc(idproducto).update(nuevaData);
  }



  eliminarProducto(idproducto: string) {
    return new Promise((resolve, reject) => {
      try {
        const respuesta = this.productocollection.doc(idproducto).delete();

        resolve(respuesta);
      }

      catch (error) {
        reject(error);
      }
    })
}
}
