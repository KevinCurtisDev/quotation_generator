//get the input used to select the number of quotes
const quoteNumber = document.querySelector("#quote-number");

//get the div that will contain the generated quotes
const generateQuote = document.querySelector("#generate-quote");

//get the input that selects the quotation type
const quotation = document.querySelector("#quote");

//create three dimensional array that lists possible life quote combinations
const lifeQuotes = [['"You should', '"Sometimes you just need to', '"When the time comes,', '"Why not', '"Try to'],
['look for', 'think about', 'take hold of'],
['the opportunities in front of you!"', 'all of the possibilities!"', 'the little wins in life."', 'nothing!"', 'anything at all."', 'your innate abilities."', 'love!"']
];

//create three dimensional array that lists possible miscelaneous quote combinations
const miscQuotes = [['"Why do', '"When do', '"Do you think', '"Do all'],
['vegetables', 'people', 'worms', 'animals'],
['fart?"', 'not think?"', 'generate random quotes in their spare time?"', 'think?"', 'do anything at all?"', 'love?"']
];

//listen for click event on the generate quote button
generateQuote.addEventListener("click", (e) => {
    //prevent page from reloading
    e.preventDefault();

    //variable to hold the type of quote selected
    let quoteType;

    //reset the quotation div to empty before generating new quotes
    quotation.innerHTML = "";

    //set the quooteType variable to either miscQuptes or lifeQuotes
    if (document.querySelector("#misc").checked) {
        quoteType = miscQuotes;
    } else {
        quoteType = lifeQuotes;
    }

    //variable to set the number of generated quotes should be quoteNumber.value 
    //unless that number is above 5
    let reps = quoteNumber.value;

    if (quoteNumber.value > 5) {
        reps = 5;
    }

    //loop through the selected quotation array and contatonate the sentences
    for (let i = 0; i < reps; i++) {
        let randomStart = [Math.floor(Math.random() * quoteType[0].length)];
        let randomMiddle = [Math.floor(Math.random() * quoteType[1].length)];
        let randomEnd = [Math.floor(Math.random() * quoteType[2].length)];

        //create a new paragraph element for each quote
        let sentence = document.createElement('p');
        sentence.innerHTML =
            `${quoteType[0][randomStart]} ${quoteType[1][randomMiddle]} ${quoteType[2][randomEnd]}`;
        quotation.append(sentence);
    }
});
