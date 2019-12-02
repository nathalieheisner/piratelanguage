function index_of(word,character) {
    for (let counter = 0; counter < word.length; counter++)  {
        let current_character = word[counter]

        if (current_character == character) {
            return counter
        }
    }
    return null
}

function is_consonant (char) {
    return index_of ("bcdfghjklmnpqrstvwxz" + "bcdfghjklmnpqrstvwxz".toUpperCase(), char) != null
}


function rovarspraket(word) {
    let counter = 0
    output = ""

    while (counter < word.length) {
        let char = word[counter]

        if (is_consonant(char)) {
            output = output + char + "o" + char
        }
        else {
            output = output + char
        }
        counter = counter + 1

    }
    return output
}


function readText(){
    let input = document.querySelector("textarea")
    return input.value
}

function onClick(){
    let text = readText()
    let result = rovarspraket(text) 
    let oversatt = document.querySelector("p")
    oversatt.innerText = result
}

variabel = document.querySelector("button")
variabel.addEventListener("click",onClick)