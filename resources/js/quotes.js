const quotearea = document.getElementById("quote");
const person = document.getElementById("quote-person");
const number = Math.floor(Math.random() * 5);
let quote = [];

function genQuote(number) {
    switch(number) {
        case 0:
        quote = ["\"All the world's a stage.\"", "- William Shakespeare"];
        break;
        case 1:
        quote = ["\"Theatre is the art of looking at ourselves.\"", "- Augusto Boal"];
        break;
        case 2:
        quote = ["\"The world is a stage, but the play is badly cast.\"", "- Oscar Wilde"];
        break;
        case 3:
        quote = ["\"From the start it has been the theatre's business to entertain people ... it needs no other passport than fun.\"", "- Bertolt Brecht"];
        break; 
        case 4:
        quote = ["\"Acting is behaving truthfully under imaginary circumstances.\"", "- Sanford Meisner"];
        break;  
    }
    return quote;
}

genQuote(number);
quotearea.innerHTML = "<h3>" + quote[0] + "</h3>";
person.innerHTML = "<p>" + quote[1] + "</p>";