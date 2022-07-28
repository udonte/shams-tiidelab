for (let n = 1; n <= 200; n++) {
    if (n % 6 == 0 && n % 8 == 0) {
        console.log('ShamsTIIDELAB');
    }
    else if (n % 6 == 0) {
        console.log('Shams');
    }
    else if (n % 8 == 0) {
        console.log('TIIDELAB');
    }
    else {
        console.log(n);
    }
}