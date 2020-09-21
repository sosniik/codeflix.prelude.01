function isBlank(str = '') {

  // console.log(str.length)
    for(i = 0; i <str.length; i++) {
        if(str[i] === ' ') {
            return true 
        } else {
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