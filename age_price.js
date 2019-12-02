// Priset ändras beroende på ålder

function age_price(age){
    if (age <= 18) {   // Om åldern är 18 eller under kostar det 10
        price = 10
    }
    
    else if (age <= 65){ // Om åldern är 65 eller under kostar det 20
        price = 20
    }

    else {
        price = 15
    }
    
    return price
}

result = age_price(35)
console.log (result)