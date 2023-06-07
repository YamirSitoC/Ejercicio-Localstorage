'use strict'

var formulario = document.querySelector("#frmpeliculas");

formulario.addEventListener('submit', function(){
    // console.log("entra");
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.lenght >= 1){
        localStorage.setItem(titulo,titulo);
    }
});

var ul = document.querySelector("#peliculas-list");

for(var i in localStorage){
    // console.log(localStorage[i]);
    
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }

    /*var li = document.createElement("li");
    li.append(localStorage[i]);*/
}

var frmDelete = document.querySelector("#frmBorrarPeliculas");

frmDelete.addEventListener('submit', function(){
    // console.log("entra");
    var titulo = document.querySelector('#borrarPelicula').value;
    if(titulo.lenght >= 1){
        localStorage.removeItem(titulo);
    }
});