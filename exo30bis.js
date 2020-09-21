function isEmpty (str = '') {
    let i = 0

    while ( str [i] !== undefined) {
        i+= 1
}
    return i <= 0

   
}

console.log(isEmpty(''))
// => true
console.log(isEmpty(' '))
// => false
console.log(isEmpty('ch0pper'))
// => false

 console.log(1 === 1)