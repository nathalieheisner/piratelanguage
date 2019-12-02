variabel = document.querySelector("h1")
variabel.innerText = "Översätt till rövarspråket"

function setColor( ){
    variabel.classList.add ("blabla")
}

variabel.addEventListener("click", setColor)


function readText(){
    input = document.querySelector("textarea")
    console.log(input.value)
}
input.addEventListener("keydown", readText)

function onClick(){
    text = readText 
}

function index_of(word,character) {
    for (let counter = 0; counter < word.length; counter++)  {
        current_character = word[counter]

        if (current_character == character) {
            return counter
        }

        else {
            counter = counter + 1 
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
        char = word[counter]

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

result = rovarspraket("jag är hungrig")
console.log (result)
