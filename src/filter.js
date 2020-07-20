function searchBar() {
    //gets information from input with onkeyup method to run the function
    let searchBarInput = document.getElementById("searchBarInput");
    //sets input information to upper case (will apply to data for comparission)
    let filter = searchBarInput.value.toUpperCase();
    //this div is where the sections of the elements are contained
    let list = document.getElementById("root");
    //gets the elements from said sections via getElementsByTagName() which returns a collection of an elements's child elements with the specified tag name
    let listedElements = list.getElementsByTagName("section");
    //declares the total amount of sections to loop through
    const totalElements = listedElements.length;
    for (i = 0; i < totalElements; i++) {
        //look for elements with a "h1" tag, these contain the champion's name
        let element = listedElements[i].getElementsByTagName("h1")[0];
        console.log(element)
        //compare input information to data node or htmlElement
        let elementValue = element.textContent || element.innerText;
        //set declared parameters to upper case and if there's a position greater than -1 on the searchbar input;
        if (elementValue.toUpperCase().indexOf(filter) > -1) {
            //do nothing (keep champions on display)
            listedElements[i].style.display = "";
            //or stop displaying champions
        } else {
            listedElements[i].style.display = "none";
        }
    }
}