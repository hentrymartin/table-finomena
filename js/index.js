(function () {
    'use strict';

    //Used this method so that the valuation can be done in one iteration
    function calculator(children, from, to, resultPlaceHolder, isRow, start) {

        var result = 0,
            start = start;
        for (var index = from; index <= to; index++) {
            var child = children[isRow ? index : start],
                value = parseInt(child.innerHTML);
            result = result + value;
            start = start + 4;
        }

        children[resultPlaceHolder].innerHTML = result;
    }

    function calculateValue(children) {

        //Row result
        calculator(children, 0, 2, 3, true);
        calculator(children, 4, 6, 7, true);
        calculator(children, 8, 10, 11, true);

        //Column Result
        calculator(children, 0, 2, 12, false, 0);
        calculator(children, 4, 6, 13, false, 1);
        calculator(children, 8, 10, 14, false, 2);
        calculator(children, 8, 10, 15, false, 3);
    }

    $(document).ready(function () {

        var table = $('.table'),
            child = table.find('.child');

        calculateValue(child);
    });
})();