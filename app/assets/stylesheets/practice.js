function rotate(array, d) {
    const shift = d % array.length;
    let first = array.slice(0,shift);
    let last = array.slice(shift,array.length);

    console.log(first);
    console.log(last);
    console.log(shift);

    let result =  last.concat(first);
    console.log(result);
}

rotate([1,2,3,4],-2);

console.log('hi');
