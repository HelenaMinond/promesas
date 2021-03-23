const obtenerDatos = async () => {
  const url = `https://jsonplaceholder.typicode.com/photos`;
  try {
    const datos = await fetch(url);
    const datosFormatoJson = await datos.json();
    const datosFiltrados = datosFormatoJson.splice(0, 20);
    datosFiltrados.forEach(val => console.log(val.id, val.title));
  } catch (error) {
      console.log(error);
  }
}
//obtenerDatos();

const mensajeComprobacion = () => {
  setTimeout(() => {
    console.log('Información enviada');
  }, 3000);
}
//mensajeComprobacion();

const mostrarDatos = async () => {
  try {
    await obtenerDatos();
    await mensajeComprobacion();
  } catch (error) {
    console.log(error);
  }
}
mostrarDatos();
