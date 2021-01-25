'use strict';
window.onload = function () {
        

    let ovh = document.getElementById('ovh');
    let pane = document.getElementById('pane');
    let inp = document.getElementById('inp');

    let maxOffset = pane.offsetWidth - ovh.offsetWidth;

    inp.addEventListener('input', e => {

        ovh.scrollLeft = e.target.value * maxOffset / 100;

    });


}
