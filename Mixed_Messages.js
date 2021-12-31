const quoteData = {
    Einstein: ["If you can't explain it simply, you don't understand it well enough.", "Life is like riding a bicycle. To keep your balance, you must keep moving.", "Look deep into nature, and then you will understand everything better."],

    Churchill: ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "If you're going through hell, keep going.", "The best argument against democracy is a five-minute conversation with the average voter."],

    Patton: ["The object of war is not to die for your country but to make the other bastard die for his.", "Don't tell people how to do things, tell them what to do and let them surprise you with their results.", "Better to fight for something than live for nothing."]

};

const messageFunction = () => {
    const lable = ['Einstein', 'Churchill', 'Patton'];
    const randomLable = Math.floor(Math.random() * 3);
    const randomQuote = Math.floor(Math.random() * 3);
    console.log(quoteData[lable[randomLable]][randomQuote]);
}

messageFunction();