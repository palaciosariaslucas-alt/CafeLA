console.log("V60")
console.log("Kyoto drip")
console.log("Siphon")
console.log("Prensa francesa")

const metodos = ["V60","Kyoto drip","Siphon","Prensa francesa" ];

for (const metodo of metodos) {
    console.log(metodo);
    }

    console.log("Fin del programa")


const ReservasporDia = [2,1,2,1,2];
let totaltazas = 0;

for (const cantidad of ReservasporDia) {
    totaltazas = totaltazas + cantidad;  
}
console.log("El total de tazas reservadas es:", totaltazas);