const { Producto } = require('./index');
const carrito = require('./index');

test("validar stock de producto a la hora de comprar", () => {

    var lapiceras = new carrito.Producto("lapiceras", 10, 199, "color roja");

    expect(lapiceras.verificarExistenciaStock()).toBe(lapiceras.getStock());
})