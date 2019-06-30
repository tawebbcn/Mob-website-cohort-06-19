'use strict';

function main() {
    // ***************** Project Variable *****************
    var flechaProjects = document.querySelector('.flecha-projects');
    var itemProjects = document.querySelectorAll('.card-item');
    var rehacerProyectos = document.querySelector('.titulo-projects');

    // ***************** Project Laboratoris *****************
    var flechaLaboritoris = document.querySelector('.flecha-laboratoris');
    var itemLaboritoris = document.querySelectorAll('.card-item-laboratoris');
    var rehacerLaboritoris = document.querySelector('.titulo-laboratoris');

    // ***************** Events Variable *****************
    flechaProjects.addEventListener('click', desplegarProyectos);
    flechaLaboritoris.addEventListener('click', desplegarLaboritoris);


    // ***************** Funcions Project *****************
    function desplegarProyectos() {
        itemProjects.forEach(function(articulo) {
            articulo.classList.remove('escondido');
        });
        flechaProjects.classList.add('escondido');
        rehacerProyectos.addEventListener('click', replegarProyectos);
        flechaProjects.removeEventListener('click', desplegarProyectos);
    }

    function replegarProyectos() {
        itemProjects.forEach(function(articulo) {
            articulo.classList.add('escondido');
        });
        flechaProjects.classList.remove('escondido');
        flechaProjects.addEventListener('click', desplegarProyectos);
        rehacerProyectos.removeEventListener('click', replegarProyectos);
    }

    // ***************** Funcions Laboratoris *****************
    function desplegarLaboritoris() {
        itemLaboritoris.forEach(function(articulo) {
            articulo.classList.remove('escondido');
        });
        flechaLaboritoris.classList.add('escondido');
        rehacerLaboritoris.addEventListener('click', replegarLaboritoris);
        flechaLaboritoris.removeEventListener('click', desplegarLaboritoris);
    }

    function replegarLaboritoris() {
        itemLaboritoris.forEach(function(articulo) {
            articulo.classList.add('escondido');
        });
        flechaLaboritoris.classList.remove('escondido');
        flechaLaboritoris.addEventListener('click', desplegarLaboritoris);
        rehacerLaboritoris.removeEventListener('click', replegarLaboritoris);
    }

}

window.addEventListener('load', main);