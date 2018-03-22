//constructora
//propiedades: información de la empresa (objeto) con 4 propiedades
/* info del Cliente
elementos
importe total, tipo de iva, */


    /* 
    Definir la estructura de un objeto que almacena una factura. Las facturas 
    están formadas por la información de la propia empresa (nombre de la 
    empresa, dirección, teléfono, NIF), la información del cliente (similar a la 
    de la empresa), una lista de elementos (cada uno de los cuales dispone de 
    descripción, precio, cantidad) y otra información básica de la factura 
    (importe total, tipo de IVA, forma de pago).
    Una vez definidas las propiedades del objeto, añadir un 
    método
    que 
    calcule el importe total de la factura y actualice el valor de la propiedad 
    correspondiente. Por último, añadir otro método que muestre por 
    pantalla el importe total de la factura en un formato HTML adecuado.
    Objetivo: Conocer la técnica para declarar objetos e inicializar una serie de 
    propiedades y  métodos */

function Empresa(nombre, direccion, telefono, nif) {
    this.nombre = nombre,
    this.direccion = direccion,
    this.telefono = telefono,
    this.nif = nif
}

function Cliente (nombre, direccion, telefono, dni){
    this.nombre=nombre,
    this.direccion=direccion,
    this.telefono=telefono,
    this.dni=dni
}

function Item(descripcion, precio, cantidad) {
    this.descripcion = descripcion,
        this.precio = precio,
        this.cantidad=cantidad
}

function Factura(total, tipoIVA, formaPago,calcularTotal, mostrar) {
        
        this.total = total
        this.tipoIVA = tipoIVA
        this.formaPago = formaPago
        this.calcularTotal = function () { },
        this.mostrar = function () { }
    }

factura01 = new Empresa ('hermanos pepe', 'madrid', 789545, 999999)
 cliente= new Cliente ('sandra' , 'toledo', 7777, 666666)

console.log (factura01.cliente)
/* Factura01 = new Factura(, ) */

// Métodos de cálculo del total y de visualización del total
/* 
function Factura(nombreCli, direccionCli, tfnoCli, nifCli) {
    this.empresa.nombre = "La Empresa";
    this.empresa.direccion = "c/ La calle";
    this.empresa.telefono = "900900900";
    this.empresa.nif = "XXXXXXXXX";
    this.cliente.nombre = nombreCli;
    this.cliente.direccion = direccionCli;
    this.cliente.telefono = tfnoCli;
    this.cliente.nif = nifCli;
    this.elementos = [this.elementos.descripcion,
    this.elementos.producto,
    this.elementos.precio];
    informacion.baseImponible = 0;
    informacion.iva = 1.16;
    informacion.total = "";
    informacion.formaPago = "contado";

    desc = desc;
    this.codigo = cod;
    this.valor = precio;
    this.iva = iva;
    this.pvp = total;
}

// Métodos de cálculo del total y de visualización del total
factura.calculaTotal = function () {
    for (var i = 0; i < this.elementos.length; i++) {
        this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
    }
    this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
};

//			factura.muestraTotal = function() {
//				this.calculaTotal();
//				alert("TOTAL = " + this.informacion.total + " euros");
//			};

factura.muestraDatos = function () {
    this.calculaTotal();
    for (var i = 0; i < this.elementos.length; i++) {
        document.write("<ul class=elementos>");
        document.write("<li class=elementos>" + this.elementos[i].descripcion + "</li>");
        document.write("<li class=elementos>" + this.elementos[i].cantidad + "</li>");
        document.write("<li class=elementos>" + this.elementos[i].precio + "</li>");
        document.write("</ul>");
    };
    document.write("<p><b>Total a pagar</b></p>");
    document.write("<ul>");
    document.write("<li>Importe Total: " + this.informacion.total + "</li>");
    document.write("<li>Iva: " + this.informacion.iva + "</li>");
    document.write("<li>Pago: " + this.informacion.formaPago + "</li>");
    document.write("</ul>");
};
var factura_01 = new Factura("Nombre del cliente",
    "Dirección del cliente",
    "600600600",
    "XXXXXXXXX");
factura_01.elementos[0] =
    { descripcion: "Producto 1", cantidad: 120, precio: 4 };
factura_01.elementos[0] =
    { descripcion: "Producto 2", cantidad: 0, precio: 0 };
factura_01.elementos[0] =
    { descripcion: "Producto 3", cantidad: 0, precio: 0 };
factura_01.muestraDatos();



 */
