import * as calculator from './calculator';

const doASum = () => {
    let a = 5;
    let b = 10;

    return calculator.sum(a, b);
};

const doADif = () => {
    let a = 5;
    let b = 10;

    return calculator.dif(a, b);
};

export {
    doASum,
    doADif
};