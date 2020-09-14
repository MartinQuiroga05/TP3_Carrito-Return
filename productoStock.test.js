const carrito = require('./index');

test('verificar-stock-producto-no-negativo', () => {

    var producto1 = new carrito.Producto("lapicera", 12, 234, "color azul");
    expect(producto1.getStock()).toBeGreaterThan(0);
});