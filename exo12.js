function substr(str='', start, len=str.length) {
    let sentence =''
for (i = 0; i < len; i ++) {
   
  if( (start + i) >= str.length ) {
      break
  }   
  sentence+=str[start+i]
   
}
return sentence
}

console.log(substr('tony tony chopper',10))
console.log(substr('ch0pper',2,2))
//le code doit commencer à partir d'une certaine valeur et se terminer à une autre 