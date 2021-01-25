'use strict';

window.onload = function () {
  var ovh = document.getElementById('ovh');
  var pane = document.getElementById('pane');
  var inp = document.getElementById('inp');
  var maxOffset = pane.offsetWidth - ovh.offsetWidth;
  inp.addEventListener('input', function (e) {
    ovh.scrollLeft = e.target.value * maxOffset / 100;
  });
};