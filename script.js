let inputLength = document.querySelector('#length')
let lower = document.querySelector('#lowercase')
let upper = document.querySelector('#uppercase')
let num = document.querySelector('#number')
let symbol = document.querySelector('#symbol')
let button = document.querySelector('#generate')
let copy = document.getElementById('copy')

const passKey = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '*;<>()[]{}#$?!^|'
}

copy.addEventListener('click', () => {
    let genePass = document.querySelector('input[type="text"]')

    if (genePass.value != "" && genePass.value != "Include any key string and define the length!") {
        genePass.select()
        document.execCommand('copy')
        alert('Password Copied!')
    }
})

button.addEventListener('click', () => {
    let length = +inputLength.value
    let activeLower = lower.checked
    let activeUpper = upper.checked
    let activeNumber = num.checked
    let activeSymbol = symbol.checked

    generatePassword(activeLower, activeUpper, activeNumber, activeSymbol, length)
})

function generatePassword(lower, upper, num, symbol, length) {
    let main = ""
    let finalPassword = ""

    const passOptions = {
        lowercase : lower,
        uppercase : upper,
        number : num,
        symbol : symbol,
    }

    for (let i = 0; i < Object.keys(passOptions).length; i++) {
        main += (Object.values(passOptions)[i]) ? passKey[Object.keys(passOptions)[i]] : "";
    }

    if (main != "" && length > 0 ) {
        for (let i = 0; i < length ; i++) {
            finalPassword += main[Math.floor(Math.random() * main.length)]
        }

        document.querySelector('input[type="text"]').value = finalPassword
    } else {
        document.querySelector('input[type="text"]').value = "Select any password option and specify the length"
    }
}
