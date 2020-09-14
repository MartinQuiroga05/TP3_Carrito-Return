const carrito = require('./index');

test('verificar_valores_no_nulos_producto', () => {

    var prod1 = new carrito.Producto('lapiz', 40, 122, 'lapiz negro');
    expect(prod1.getDescripcion()).toBeDefined();
    expect(prod1.getStock()).toBeDefined();
    expect(prod1.getNombre()).toBeDefined();
});