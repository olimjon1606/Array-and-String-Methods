const n = [1, 2, 3, 4, 5, 6];

n.forEach(consoleItem);

function consoleItem(item, index, arr) {
    console.log('a[' + index + '] =' + item, arr);
}

