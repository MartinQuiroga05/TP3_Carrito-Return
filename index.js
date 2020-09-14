class Carrito {
    constructor(usuario, numCarrito) {
        this.usuario = usuario;
        this.numCarrito = numCarrito;
        this.montoTotal = 0;
        this.itemsCarrito = [];
    }

    agregarItemsCarrito(item, cant, subtotal) {
        this.itemsCarrito.push([item, cant, subtotal]);
        this.montoTotal = (this.montoTotal + subtotal);
    }

    verificarUsuarioCarrito() {
        if (this.usuario !== null) {
            return true;
        }
    }

    verificarCantidadItem() {
        let contador = 0;
        this.itemsCarrito.forEach(element => {
            contador = contador + element[1];
        });
        if (contador > 0 && contador <= 10) {
            return true;
        } else {
            return false;
        }
    }

    getMontoTotal() {
        return this.montoTotal;
    }
}

class Producto {
    constructor(name, precioP, stockP, descripP) {
        this.nombre = name;
        this.precio = precioP;
        this.stock = stockP;
        this.descripcion = descripP;
    }

    calcularSubtotal(cant) {
        let subTotal = this.precio * cant;
        return subTotal;
    }

    eliminarProductoStock(cant) {
        this.stock = (this.stock - cant);
    }

    verificarExistenciaStock() {

        if (this.stock > 0) {
            return this.stock;
        } else {
            return 0;
        }
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    getStock() {
        return this.stock;
    }

    getDescripcion() {
        return this.descripcion;
    }
}

module.exports = { Carrito, Producto };