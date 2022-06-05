let nroButacas: number = Number(prompt(`Ingrese cantidad de butacas que posee la sala de cine`));
let ocupacion: boolean[] = new Array(nroButacas);

function asignarButacas() {
  return Boolean(Math.floor(Math.random() * 2))
}

function ocuparButacas(v: boolean[]) {
  let butacasDisponibles: number = 0;
  let butacasOcupadas: number = 0;
  for (let i: number = 0; i < v.length; i++) {
    v[i] = asignarButacas();
    if (v[i] === false) {
      butacasDisponibles += 1;
    } else {
      butacasOcupadas += 1;
    }
  }
  console.log(`Las butacas libres son ${butacasDisponibles}`);
  console.log(`Las butacas ocupadas son ${butacasOcupadas}`);
}
console.log(`La cantidad de butacas del cine son ${nroButacas}`);
ocuparButacas(ocupacion);
console.log(ocupacion); // se agrega para ver la asignacion de asientos;
//esta muy bien el ejercicio
