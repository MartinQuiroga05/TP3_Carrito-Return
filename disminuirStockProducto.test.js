const carrito = require("./index");

test('verificar_disminuir_stock_al_confirmar_compra', () => {

    var prod1 = new carrito.Producto('lapiz', 40, 122, 'lapiz negro');
    var carrito1 = new carrito.Carrito("Mica Teot", 1);
    carrito1.agregarItemsCarrito(prod1, 2, 80);
    prod1.eliminarProductoStock(2);
    expect(prod1.getStock()).toBe(120);
});