// чтобы использовать эти функции нужно написать экспорт
//тогда с другого файла js можно до них достучатся.


function pow (a,b) {
    return Math.pow(a,b)
}

function substr (...args) {
    return args.reduce((acc,el) => acc -el);
}

function sum (...args) {
    return args.reduce((acc,el) => acc + el, 0);
}

export {pow, sum, substr};

