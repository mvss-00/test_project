"use strict"

function getTimeFromMinutes(min) {
    let ost = min % 60,
        cel = Math.floor(min / 60),
        hoursStr = '';

    if (typeof(min) !== 'number' || !Number.isInteger(min) || min < 0) {
        return 'Введите количество минут';
    } else if (min <= 59) {
        return `Это ${ost} минут`
    } else {
        switch (cel) {
            case 1:
                hoursStr = 'час';
                break;
            case 2:
                hoursStr = 'часа';
                break;
            case 3:
                hoursStr = 'часа';
                break;
            case 4:
                hoursStr = 'часа';
                break;
            default:
                hoursStr = 'часов';
           }
        return `Это ${cel} ${hoursStr} ${ost} минут`
    }
}
console.log(getTimeFromMinutes());
