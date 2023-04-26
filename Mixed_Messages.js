const quoteData = {
  'Albert Einstein': ["If you can't explain it simply, you don't understand it well enough.", "Life is like riding a bicycle. To keep your balance, you must keep moving.", "Look deep into nature, and then you will understand everything better."],

  'Winston Churchill': ["Success is not final, failure is not fatal: it is the courage to continue that counts.", "If you're going through hell, keep going.", "The best argument against democracy is a five-minute conversation with the average voter."],

  'General Patton': ["The object of war is not to die for your country but to make the other bastard die for his.", "Don't tell people how to do things, tell them what to do and let them surprise you with their results.", "Better to fight for something than live for nothing."],

  'Elon Musk': ["When something is important enough, you do it even if the odds are not in your favor.", "Life is too short for long-term grudges.", "I'd rather be optimistic and wrong than pessimistic and right."],

  'Steve Jobs': ["You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.", "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on.", "Things don't have to change the world to be important."]

};

const messageFunction = () => {
  const keys = ['Albert Einstein', 'Winston Churchill', 'General Patton', 'Elon Musk', 'Steve Jobs'];
  const randomKey = Math.floor(Math.random() * keys.length);
  const randomQuote = Math.floor(Math.random() * quoteData[keys[randomKey]].length);
  console.log(keys[randomKey] + ':')
  console.log(quoteData[keys[randomKey]][randomQuote] + '\n');
}

for (let i = 0; i < 5; i++) {
  messageFunction();
}
