const quoteText =document.getElementById('quote');
const quoteAuthor =document.getElementById('author');
const btnTwitter =document.getElementById('twitter-button');
const btnNewQoute =document.getElementById('new-quote');
const codeContainer =document.getElementById('quote-container');
const loaderloder =document.getElementById('loader');


function loader(){
    codeContainer.hidden=true;
    loaderloder.hidden=false;
}


function unloader(){
    codeContainer.hidden=false;
    loaderloder.hidden=true;
}



async function x(){
    try{
    loader();
    const pro="https://tranquil-shore-36133.herokuapp.com/";
    const url='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    const response = await fetch(pro + url);
    const data= await response.json();
        unloader();
    quoteText.innerText=data.quoteText;
    quoteAuthor.innerText=data.quoteAuthor;
    
    
    }
    catch(error){
        x();
        console.log("heyyyyyyy mai chala",error);
      
    }

}

function tweet(){
    const quote=quoteText.innerText;
    const authoQuote=quoteAuthor.innerText;
    
    const api=`https://twitter.com/intent/tweet?text=${quote}-${authoQuote}`;
    window.open(api,"_blank");
}


btnTwitter.addEventListener('click',tweet);
btnNewQoute.addEventListener('click',x);
x();
