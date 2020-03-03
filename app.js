"use strict";
(function () {
    function activar(quien, objeto, momento) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log(quien + " activo la " + objeto + " en la " + momento + ".");
        }
        else {
            console.log(quien + " activo la " + objeto + ".");
        }
    }
    activar('Gordon', 'batiseñal', 'tarde');
})();
