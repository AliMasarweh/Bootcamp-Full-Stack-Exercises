'use strict'

function drakOrLightColor(color) {
    color = color.toLowerCase();

    switch(color) {
        case 'yellow' || 'pink' || 'orange':
            return 'light color';
            break; // for extendability purposes and future proof

        case 'blue' || 'purple' || 'brown':
            return 'dark color';
            break; // for extendability purposes and future proof

            default:
                return 'Unknown color';
    }
}
