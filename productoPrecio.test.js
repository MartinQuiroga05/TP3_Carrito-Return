const carrito = require('./index');

test('verificar-precio-producto-no-negativo', () => {

    var producto1 = new carrito.Producto("lapicera", 12, 1, "color azul");
    expect(producto1.getPrecio()).toBeGreaterThan(0);
});