//Utilizamos el array resultante del ejercicio de comprobación
var mascotasJson = [
    {
        "nombre": "fluffy",
        "mascota": true,
        "animal": "gato",
        "edadHumana": 7
    },
    {
        "nombre": "Balto",
        "mascota": true,
        "animal": "perro",
        "edadHumana": 11
    },
    {
        "nombre": "Mandibulas",
        "mascota": false,
        "animal": "tiburon",
         "edadHumana": 50
    },
    {
        "nombre": "chispas",
        "mascota": true,
        "animal": "gato",
        "edadHumana": 21
    },
    {
        "nombre": "cariñosito",
        "mascota": false,
        "animal": "oso",
        "edadHumana": 30
    }
];


//Inicializa i con la longitud del array y decrementa en cada iteración
for (let i = mascotasJson.length; i > 0; i-- ){ 
    //elimina el ultimo elemento del array
    mascotasJson.pop(); 
    //muestra cuántos objetos quedan
    console.log('Objetos Restantes: ' + (i-1));
}
    //muestra el mensaje cuando no quedan elementos
  console.log('Ya no quedan items');
