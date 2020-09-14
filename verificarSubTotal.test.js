const carrito = require('./index');

test("verificar_total_carrito_igual_suma_subtotal", () => {

    var carrito1 = new carrito.Carrito("Martin Teppa", 1);
    var hoja = new carrito.Producto("Hoja", 15, 400, "Hoja A3");
    var lapiz = new carrito.Producto("lapiz Faber-Castell", 35, 324, "lapiz negro 2B");

    carrito1.agregarItemsCarrito(hoja, 2, 30);
    carrito1.agregarItemsCarrito(lapiz, 4, 140);
    var suma = (2 * 15) + (4 * 35);
    expect(carrito1.getMontoTotal()).toBe(suma);
})