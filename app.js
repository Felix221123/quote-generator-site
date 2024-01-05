//seting our variables first

let btn = document.querySelector('#new-quote');
let quoteText = document.querySelector('.actual-text');
let authorPerson = document.querySelector('.author-of-quote')


//now we are going to store all our quotes in an array in a form of 
//objects

const Quotes = [
    {
        quote: "Sir, my concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
        author: 'Abraham Lincoln'
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        author: "Oscar Wilde"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        quote: "In this life we cannot do great things. We can only do small things with great love.",
        author: "Mother Teresa"
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author: "Marilyn Monroe"
    },
    {
        quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
        author: "Albert Camus"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
        author: "F. Scott Fitzgerald"
    },
    {
        quote: "Life is either a daring adventure or nothing.",
        author: "Helen Keller"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss"
    },
    {
        quote: "Life is made of ever so many partings welded together.",
        author: "Charles Dickens"
    }
];


//code to allow the button to generate random quotes based on the numnber generated
//from the array length
let lastRandom = -1; // Initialize with a value that won't match any index

btn.addEventListener('click', function() {
    let random;

    do {
        // Generate a random number from 0 to the length of the quote
        random = Math.floor(Math.random() * Quotes.length);
    } while (random === lastRandom); // Keep generating until it's different

    lastRandom = random; // Update the last displayed quote index

    // Display the quote and the author on the screen
    quoteText.innerText = '"' + Quotes[random].quote + '"';
    authorPerson.innerText = Quotes[random].author;
});
