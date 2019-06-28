'use strict';

function main() {
    var flechaProjects = document.querySelector('.flecha-projects');
    var itemProjects = document.querySelectorAll('.card-item');
    var rehacer = document.querySelector('.titulo-projects');

    function desplegarProyectos() {
        itemProjects.forEach(function(articulo) {
            articulo.classList.remove('escondido');
        });
        flechaProjects.classList.add('escondido');
        rehacer.addEventListener('click', replegarProyectos);
        flechaProjects.removeEventListener('click', desplegarProyectos);
    }

    function replegarProyectos() {
        itemProjects.forEach(function(articulo) {
            articulo.classList.add('escondido');
        });
        flechaProjects.classList.remove('escondido');
        flechaProjects.addEventListener('click', desplegarProyectos);
        rehacer.removeEventListener('click', replegarProyectos);
    }

    flechaProjects.addEventListener('click', desplegarProyectos);

}

window.addEventListener('load', main);