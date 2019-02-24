function duplicate() {
    let a = [1,2,3,4];
    let b = [];
    
    b = JSON.parse(JSON.stringify(a));
    let duplicateArrays = a.concat(b);
    console.log(duplicateArrays);
}
duplicate();

function deleteOddNumber() {
    let a = [1,2,3,4,5,6,7,8,9];
    
    for (var i = 0; i < a.length; i++) {
        if (a[i]%2 === 0 ) {
            a.splice(i, 1);
        }
    }
    console.log(a);
}

deleteOddNumber();