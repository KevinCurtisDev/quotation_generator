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
const miscQuotes = [['"Why do', '"When do', '"Do you think,', '"Do all'], 
                    ['men', 'people', 'women', 'animals'], 
                    ['fart?"', 'not think?"', 'generate random quotes in their spare time?"', 'think?"', 'do anything at all?"', 'love?"']
                ];