
//get input
let filterInput = document.getElementById("filterInput");
//adding eventListener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //getting the value of the input

    let filterValue = document.getElementById("filterInput").value.toUpperCase();

    //get names from  ul

    let ul = document.getElementById('names');

    //gettting collection items

    let li = ul.getElementsByClassName('collection-item');

    //looping through collection items


    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //if matches
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }

}
