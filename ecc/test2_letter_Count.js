function letter_count() {
    array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var count = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (count > 0) {
                console.log(current + ' comes --> ' + count + ' times<br>');
            }
            current = array_elements[i];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0) {
        console.log(current + ' comes --> ' + count + ' times');
    }

}