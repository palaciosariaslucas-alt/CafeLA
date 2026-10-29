function calcularPrecio(precioUnitario, cantidad) {
    const total= precioUnitario*cantidad;
    return total;
}
console.log(calcularPrecio(3, 4));
console.log(calcularPrecio(7, 1));
console.log(calcularPrecio(5, 2));

function puedeReservar(cantidad) {
  if (cantidad <=2){
     return true;
  } else {
    return false
}
}
if(puedeReservar(2)) {
    console.log("Reserva Confirmada")
} else {
    console.log("Lo siento, maximo 2 tazas por persona")
}

   function puedeReservar(cantidad, totalHoy) {
  return cantidad <= 2 && (totalHoy + cantidad) <= 50;
}

console.log(puedeReservar(1, 47));
console.log(puedeReservar(2, 67));