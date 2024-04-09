// FUNCTION CODE GOES HERE
function stringCounter(sentence){
    // takes a sentence string as an input parameter
    // sentence = " ";

    // displays the No. of Words sentence in the console
    // console.log("No. of words:");

    // use the built-in string split
    // sentence.split(sentence1);

    // // store the split function
    let storeArr = sentence.split(" ");
    console.log(storeArr);

    // // use a console statement to display the length
    console.log(storeArr.length);
    
    // // use console statment to display length
    console.log("No. of Words:" + " " + storeArr.length);

    // //display the No of Characters in the sentence
    console.log("No. of characters:" + " " + sentence.length);

}

// TEST CASE 1
let sentence1 = "The largest living thing on earth is a giant sequoia named General Sherman";
stringCounter(sentence1);

// TEST CASE 2
let sentence2 = "A sunset on Mars is blue";
stringCounter(sentence2);

