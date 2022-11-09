// palíndrome casi hecho...

function palindrome(str) {
  console.log(    )
  console.log(    )
/*
let cadenaEnMinusculas = str.toLowerCase() 
let cadenaSinEspacios = cadenaEnMinusculas.replace(/ /g, "")
*/

let normalized_string = str.toLowerCase().replace(/ /g, "").match(/[0-9a-zA-ZñÑ]/ig)
let normalized_string_length = normalized_string.length

let range = ''
if (normalized_string_length % 2 == 0) {
	range = normalized_string_length / 2
} else {
	range = Math.round(normalized_string_length / 2) - 1 // porque redondea hacia arriba desde el .5
}

for (let i=0; i<range; i++) {
  console.log(normalized_string[i] + '...compara con...' + normalized_string[normalized_string_length - (i+1)])
if (normalized_string[i] !== normalized_string[normalized_string_length - (i+1)]
) {return false}
}
	return true;
}
palindrome("eye");