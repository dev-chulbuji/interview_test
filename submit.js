const get_random = (max) => {
    if (max < 0) throw console.error("bad argument");
    
    let bin = convertDecToBin(max);
    let binLength = getBinLength(bin);
    let binRandomNum = "";

    loop(binLength) (() => {
        binRandomNum += get_zero_or_one();
    });

    let decRandomNum = convertBinToDec(binRandomNum);
    let rtv = decRandomNum % max;
    return rtv;
}

function convertDecToBin(dec) {
    return (dec >>> 0).toString(2);
}

function convertBinToDec(bin) {
    return parseInt(bin, 2);
}

function getBinLength(bin) {
    return bin.length;
}

const get_zero_or_one = () => {
    return Math.round(Math.random());
}

const loop = count => func => {
    if (count > 0) {
        func();
        loop(count - 1)(func)
    }
}