function isBlank(str = '') {
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return false
        }
    } 

    return true 
}

console.log(isBlank(''))
// => true
console.log(isBlank(' '))
// => true
console.log(isBlank('ch0pper'))
// => false


//code ascii espace : 32 decimal 