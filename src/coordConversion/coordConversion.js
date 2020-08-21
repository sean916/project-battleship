function coordConversion(arg) {
    let coordArr = [];
    let array = arg.toString().split("");
    if (array[1] == null) {
        coordArr.push("A");
        coordArr.push(array[0]);
    } else if (array[0] == "1") {
        coordArr.push("B");
        coordArr.push(array[1]);
    } else if (array[0] == "2") {
        coordArr.push("C");
        coordArr.push(array[1]);
    } else if (array[0] == "3") {
        coordArr.push("D");
        coordArr.push(array[1]);
    } else if (array[0] == "4") {
        coordArr.push("E");
        coordArr.push(array[1]);
    } else if (array[0] == "5") {
        coordArr.push("F");
        coordArr.push(array[1]);
    } else if (array[0] == "6") {
        coordArr.push("G");
        coordArr.push(array[1]);
    } else if (array[0] == "7") {
        coordArr.push("H");
        coordArr.push(array[1]);
    } else if (array[0] == "8") {
        coordArr.push("I");
        coordArr.push(array[1]);
    } else if (array[0] == "9") {
        coordArr.push("J");
        coordArr.push(array[1]);
    }
    let coordinate = coordArr.join('');
    return coordinate;
}

export { coordConversion };