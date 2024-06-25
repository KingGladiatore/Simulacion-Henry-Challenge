var personas = [
  {
    nombre: "Emi",
    edad: 21,
    hobbies: ["correr", "dormir", "nadar"],
    amigos: [
      {
        nombre: "Martin",
      },
      {
        nombre: "Leo",
      },
    ],
  },
  {
    nombre: "Franco",
    edad: 22,
    hobbies: ["futbol", "golf"],
    amigos: [
      {
        nombre: "Emi",
      },
      {
        nombre: "Jimmy",
      },
      {
        nombre: "Matias",
      },
    ],
  },
  {
    nombre: "Martin",
    edad: 35,
    hobbies: ["Cancha", "emprender"],
    amigos: [
      {
        nombre: "Toni",
      },
      {
        nombre: "Leo",
      },
      {
        nombre: "Manu",
      },
    ],
  },
];

Array.prototype.filtrar = function (callback) {
  let nuevo_array = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) nuevo_array.push(this[i]);
  }
  return nuevo_array;
};

const resultado = personas.filtrar(function (p) {
  return p.edad <= 22;
});

resultado.forEach(objeto => {
  console.log(objeto)
});

// console.log('El resultado es '+ resultado);
