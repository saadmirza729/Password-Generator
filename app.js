function generatePassword () {

    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz@#$!123456789"

    for (let i = 0; i < 8; i++) {
        pass += str[Math.ceil(Math.random()*(str.length -1))]
    }
    console.log(pass)

    let pass1 = document.getElementById('pass1')
    pass1.innerHTML = pass
}

generatePassword ()