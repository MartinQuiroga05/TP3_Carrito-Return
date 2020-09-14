const carrito = require('./index');

test('verificar usuario de carrito este asignado', () => {
    var carrito1 = new carrito.Carrito("martin", 1);
    expect(carrito1.verificarUsuarioCarrito()).toBe(true);
});