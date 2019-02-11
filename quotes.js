
axios ({

    method : 'get' ,
    url : 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'

})

.then((response) => {

    console.log(response); 
    
    const author = response.data.quoteAuthor ;
    $('body').append((`<h2>${author}</h2>`));
    const text = response.data.quoteText ;
    $('body').append((`<h2>${text}</h2>`));
  })


  .catch((error) => {
    console.log(error);
  });


  