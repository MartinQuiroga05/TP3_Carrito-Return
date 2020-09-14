const carrito = require('./index');

test('verificar cantidad productos carrito sea mayor a 0', () => {

    var prod1 = new carrito.Producto('cartulina', 150, 10, 'papel de color');
    var carrito1 = new carrito.Carrito("martin", 3);
    var subTotal = prod1.calcularSubtotal(5)
    carrito1.agregarItemsCarrito(prod1, 5);
    expect(carrito1.verificarCantidadItem()).toBe(true);
});