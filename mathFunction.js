function mathFunction(a, b, c) {
    var none = true;
    var result = "";

    if (a + b == c) {
        none = false;
        result += '+';
    }
    if (a - b == c) {
        none = false;
        result += '-';
    }
    if (a * b == c) {
        none = false;
        result += '*';
    }
    if (a / b == c) {
        none = false;
        result += '/';
    }
    if (none == true) {
        result = 'None';
    }

    console.log(result);
}

mathFunction(1, 2, 3);
mathFunction(2, 2, 4);
mathFunction(3, -3, -9);
mathFunction(1, 2, -1);
mathFunction(3, 3, 1);
mathFunction(7, 1, 11);
