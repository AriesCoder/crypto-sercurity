const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]
const cipher = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z','A', 'B', 'C' ]

let pass = 'password'

const encipher = (pass) =>{
    pass = pass.toUpperCase().split('')
    let newPass = []
    let index 
    for(let n = 0; n < pass.length; n++){
        index = alphabet.findIndex(elem => elem === pass[n])
        newPass.push(cipher[index].toLowerCase())
    }
    return newPass.join('')
}
console.log(ciphered(pass))



