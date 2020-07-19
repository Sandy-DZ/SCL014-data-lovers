function searchBar() {
    //obtiene información de la entrada con el método onkeyup para ejecutar la función
    let searchBarInput = document.getElementById("searchBarInput");
    //establece la información de entrada en mayúsculas (se aplicará a los datos para la comparación)
    let filter = searchBarInput.value.toUpperCase();
    //este div es donde están contenidas las secciones de los elementos
    let list = document.getElementById("root");
    //obtiene los elementos de dichas secciones a través de getElementsByTagName () que devuelve una colección de elementos secundarios de un elemento con el nombre de etiqueta especificado
    let listedElements = list.getElementsByTagName("section");
    //declara la cantidad total de secciones para recorrer
    const totalElements = listedElements.length;
    for (i = 0; i < totalElements; i++) {
        //busca elementos con una etiqueta "p", estos contienen el nombre del campeón
        let element = listedElements[i].getElementsByTagName("p")[0];
        //compare la información de entrada con el nodo de datos o htmlElement
        let elementValue = element.textContent || element.innerText;
        //establezca los parámetros declarados en mayúsculas y si hay una posición mayor que -1 en la entrada de la barra de búsqueda;
        if (elementValue.toUpperCase().indexOf(filter) > -1) {
            //no hacer nada (mantiene campeones en exhibición)
            listedElements[i].style.display = "";
            // deja de mostrar campeones
        } else {
            listedElements[i].style.display = "none";
        }
    };
    

}
