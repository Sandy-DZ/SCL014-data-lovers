function filtrar() {
    // Se saca el valor de un input
    let valorBuscador = document.getElementById("buscador");
    // Esto del filtro es para que pueda ser estatico a una jerarquia de solo letras pequeñas o altas para poder aplicar el filtro en el array
    let filtro = valorBuscador.value.toUpperCase();
    // Lista de elementos a ordernar en un input que en este caso seria una lista desordenada 
    let lista = document.getElementById("root");
    // Lista compelta de elemtos existentes dentro de la lsita que se saco anteriormente en la lista desordenada y especialmente sacamos todas las etiquetas como tal para poder manipularlas
    let elementosDeLaLista = lista.getElementsByTagName("section");
    const cantidadDeElementos = elementosDeLaLista.length;
    for (posicion = 0; posicion < cantidadDeElementos; posicion++) {
        let elemento = elementosDeLaLista[posicion].getElementsByTagName("p")[0];
        let valorElemento = elemento.textContent || elemento.innerText;
        if (valorElemento.toUpperCase().indexOf(filtro) > -1) {
            elementosDeLaLista[posicion].style.display = "";
        } else {
            elementosDeLaLista[posicion].style.display = "none";
        }
    }
}