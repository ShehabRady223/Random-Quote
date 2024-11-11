var arr = [
    {
        quote: "Be the change that you wish to see in the world.",
        writer: "Mahatma Gandhi"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        writer: "Albert Einstein"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        writer: "Bernard M. Baruch"
    },
    {
        quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
        writer: "Albert Einstein"
    },
    {
        quote: "The uncreated and the dead exist solely in our actual and virtual pasts.",
        writer: "David Mitchell, Cloud Atlas"
    },
    {
        quote: "A good friend once told me that the problems are like cockroaches. If drawn to light, they'll get scared.",
        writer: "Carlos Ruiz Zafón, Marina"
    }
]
// arr.splice(1, 1);
// console.log(arr);

function randomQuote() {
    if (isEmpty(arr)) {
        var randomNum = Math.floor(Math.random() * arr.length);
        var all = document.getElementById('all');
        all.innerHTML = `
            <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="random-quote d-flex align-items-center flex-column rounded-3 p-5 text-center">
                        <h1>Random Quote Generator</h1>
                        <h2>
                            <i class="fa-solid fa-quote-left"></i>
                            <span id="quote">${arr[randomNum].quote}</span>
                            <i class="fa-solid fa-quote-right"></i>
                        </h2>
                        <p class="writer" id="writer">~ ${arr[randomNum].writer} ~</p>
                        <button onclick="randomQuote()" class="btn btn-outline-light"> New Quote </button>
                    </div>
                </div>
            </div>
    `
        arr.splice(randomNum, 1);
    }
    else {
        var all = document.getElementById('all');
        all.innerHTML= `
        <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="random-quote d-flex align-items-center flex-column rounded-3 p-5 text-center">
                    <h1>Random Quote Generator</h1>
                    <h2>
                        <i class="fa-solid fa-quote-left"></i>
                        <span id="quote"> NO more of Quote for to day. Have good day &#x1F600; </span>
                        <i class="fa-solid fa-quote-right"></i>
                    </h2>
                    <p class="writer" id="writer">~ By Me ~</p>
                    <button onclick="randomQuote()" class="btn btn-outline-light"> New Quote </button>
                </div>
            </div>
        </div>
`
    }
}

function isEmpty(arr) {
    if (arr.length == 0) {
        return false;
    }
    else {
        return true;
    }
}
