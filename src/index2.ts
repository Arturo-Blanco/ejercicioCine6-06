let nroButacas: number = Number(
  prompt(`Ingrese cantidad de butacas que posee la sala de cine`)
);
let ocupacion: boolean[] = new Array(nroButacas); // se declara un array booleano con dimension nroButacas;

//se utiliza la funcion Mat.round para redondear valores decimales a su entero mas cercano, y el <0.5 para obtencion de valores true o false
function asignarButacas() {
  return Math.round(Math.random()) < 0.5;
}

function ocuparButacas(v: boolean[] | number[]) {
  let butacasOcupadas: number = 0;
  let butacasDisponible: number = 0;
  for (let i: number = 0; i < v.length; i++) {
    v[i] = asignarButacas();
    if (v[i] === false) {
      butacasDisponible += 1;
    } else {
      butacasOcupadas += 1;
    }
  }
  console.log(`Las butacas libres son ${butacasDisponible}`);
  console.log(`Las butacas ocupadas son ${butacasOcupadas}`);
}
console.log(`La cantidad de butacas del cine son ${nroButacas}`);
ocuparButacas(ocupacion);
console.log(ocupacion); // se agrega para ver la asignacion de asientos;
