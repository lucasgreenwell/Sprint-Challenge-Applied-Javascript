// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let values = Object.values(response.data.articles);
        values.forEach( arr => {
            arr.forEach( ele => {
                console.log(ele.headline);
                // create elements
                const card = document.createElement('div');
                const headline = document.createElement('div');
                const author = document.createElement('div');
                const imagePlace = document.createElement('div');
                const img = document.createElement('img');
                const citation = document.createElement('span')

                //add classes
                card.classList.add('card');
                headline.classList.add('headline');
                author.classList.add('author');
                imagePlace.classList.add('img-container');


                //set up structure
                const cardsGoHere = document.querySelector('.cards-container');
                cardsGoHere.append(card);
                card.append(headline, author);
                author.append(imagePlace, citation)
                imagePlace.append(img)


                //add text
                headline.textContent = ele.headline;
                citation.textContent = ` By ${ele.authorName}`;
                img.setAttribute('src', ele.authorPhoto);
            })
        })
    })




// function cardMaker (){
    // //create elements
    // const card = document.createElement('div');
    // const headline = document.createElement('div');
    // const author = document.createElement('div');
    // const imagePlace = document.createElement('div');
    // const img = document.createElement('img');
    // const citation = document.createElement('span')

    // //add classes
    // card.classList.add('card');
    // headline.classList.add('headline');
    // author.classList.add('author');
    // imagePlace.classList.add('img-container');


    // //set up structure
    // const cardsGoHere = document.querySelector('.cards-container');
    // cardsGoHere.append(card);
    // card.append('headline, author');
    


    // //add text
    // headline.textContent = ele.headline;
    // author.textContent = ele.authorName;
    // img.setAttribute('src', ele.authorPhoto);
// }